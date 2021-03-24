"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var CourseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_user_dto_1 = require("../auth/dto/auth-user.dto");
const content_service_1 = require("../content/content.service");
const enrollment_service_1 = require("../enrollment/enrollment.service");
const highlight_course_service_1 = require("../highlight-course/highlight-course.service");
const paging_response_dto_1 = require("../shared/dtos/paging-response.dto");
const course_entity_1 = require("../shared/entities/course.entity");
const enrollment_entity_1 = require("../shared/entities/enrollment.entity");
const watch_list_entity_1 = require("../shared/entities/watch-list.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const array_util_1 = require("../shared/utils/array.util");
const watch_list_service_1 = require("../watch-list/watch-list.service");
const typeorm_2 = require("typeorm");
const course_es_service_1 = require("./course-es.service");
const uuid_1 = require("uuid");
let CourseService = CourseService_1 = class CourseService {
    constructor(courseRepository, courseEsService, highlightCourseService, watchListService, enrollmentService, contentService) {
        this.courseRepository = courseRepository;
        this.courseEsService = courseEsService;
        this.highlightCourseService = highlightCourseService;
        this.watchListService = watchListService;
        this.enrollmentService = enrollmentService;
        this.contentService = contentService;
        this.logger = new common_1.Logger(CourseService_1.name);
        this.PROJECTION = [
            'id',
            'title',
            'subDescription',
            'price',
            'discount',
            'avatarPath',
            'totalEnrollment',
            'avgStar',
            'totalView',
            'totalReview',
            'creatorId',
            'categoryId',
            'createdDate',
            'updatedDate',
        ];
    }
    async decor(courses, user) {
        if (!user) {
            return courses;
        }
        const courseIds = courses.map((c) => c.id);
        const watchList = await this.watchListService.findByCourseIdIn(user.id, courseIds);
        const enrollment = await this.enrollmentService.findByCourseIdIn(user.id, courseIds);
        const isWatchList = watchList.reduce((map, curr) => {
            map[curr.courseId] = true;
            return map;
        }, {});
        const isEnrollment = enrollment.reduce((map, curr) => {
            map[curr.courseId] = true;
            return map;
        }, {});
        return courses.map((course) => (Object.assign(Object.assign({}, course), { isWatchList: isWatchList[course.id] || false, isEnrollment: isEnrollment[course.id] || false })));
    }
    async all(user) {
        const courses = await this.courseRepository.find({
            where: {
                status: entity_status_1.EntityStatus.ACTIVE,
            },
            select: this.PROJECTION,
            relations: ['category'],
        });
        return this.decor(courses);
    }
    async search(request, user) {
        let courses = [];
        let total = 0;
        let isEmpty = false;
        if (request.onlyWatchList) {
            const watchList = await this.watchListService.findByUserId(user.id);
            request.ids = watchList.map((wl) => wl.courseId);
            isEmpty = request.ids.length === 0;
        }
        if (request.onlyEnrollment) {
            const enrollments = await this.enrollmentService.findByUserId(user.id);
            request.ids = enrollments.map((e) => e.courseId);
            isEmpty = request.ids.length === 0;
        }
        if (!isEmpty) {
            const esResult = await this.courseEsService.search(request);
            total = esResult.total;
            courses = await this.findByIdIn(esResult.courseIds);
        }
        return paging_response_dto_1.PagingResponse.of(request.page, request.pageSize, total, await this.decor(courses, user));
    }
    async findByIdIn(ids, options) {
        if (array_util_1.ArrayUtil.isEmpty(ids)) {
            return [];
        }
        const rawResult = await this.courseRepository.find(Object.assign({ where: {
                id: typeorm_2.In(ids),
                status: entity_status_1.EntityStatus.ACTIVE,
            }, select: this.PROJECTION, relations: ['creator', 'category', 'category.parent'] }, options));
        const idxMap = ids.reduce((map, id, idx) => {
            map[id] = idx;
            return map;
        }, {});
        const result = [];
        rawResult.forEach((item) => {
            result[idxMap[item.id]] = item;
        });
        return result;
    }
    async getDetail(courseId, user) {
        const course = await this.courseRepository.findOne({
            where: { id: courseId },
            relations: ['contents', 'creator', 'category', 'category.parent'],
        });
        if (!course) {
            throw new common_1.NotFoundException('This course is not exists');
        }
        await this.increaseTotalView(courseId);
        const responses = await this.decor([course], user);
        return responses[0];
    }
    async findCategoryId(courseId) {
        const { categoryId, } = await this.courseRepository
            .createQueryBuilder()
            .where('id = :courseId', { courseId })
            .select('categoryId')
            .getRawOne();
        return categoryId;
    }
    async exists(courseId) {
        return ((await this.courseRepository.count({
            where: { id: courseId },
        })) > 0);
    }
    async validate(courseId, userId) {
        return ((await this.courseRepository.count({
            where: { id: courseId, creatorId: userId },
        })) > 0);
    }
    async validateAndThrow(courseId, userId) {
        const courseExists = await this.validate(courseId, userId);
        if (!courseExists) {
            throw new common_1.BadGatewayException('Bạn không có quyền chỉnh sửa khóa học này');
        }
    }
    async save(course) {
        return this.courseRepository.manager.transaction(async () => {
            const { contents } = course, restCourse = __rest(course, ["contents"]);
            const savedCourse = await this.courseRepository.save(Object.assign(Object.assign({}, restCourse), { slug: uuid_1.v4() }));
            if (!!savedCourse) {
                if (!!contents) {
                    contents.forEach(content => content.courseId = savedCourse.id);
                    this.contentService.save(...contents);
                }
                if (!(await this.courseEsService.upsertCourse(savedCourse))) {
                    throw new Error(`Upsert elasticsearch failed for course: ${savedCourse.id}`);
                }
                return savedCourse;
            }
            return null;
        });
    }
    async add(userId, course) {
        course.creatorId = userId;
        return this.save(course);
    }
    async update(userId, courseId, course) {
        await this.validateAndThrow(courseId, userId);
        return this.courseRepository.manager.transaction(async () => {
            const change = {
                title: course.title,
                slug: uuid_1.v4(),
                subDescription: course.subDescription,
                description: course.description,
                price: course.price,
                discount: course.discount,
                avatarPath: course.avatarPath,
                coverPath: course.coverPath,
                categoryId: course.categoryId,
            };
            const success = await this.partialUpdate(courseId, change);
            if (!success) {
                throw new Error(`Partial update failed for course: ${courseId}`);
            }
            if (!!course.contents) {
                course.contents.forEach(content => content.courseId = courseId);
                await this.contentService.save(...course.contents);
            }
            return success;
        });
    }
    async partialUpdate(courseId, change) {
        const result = await this.courseRepository.update({ id: courseId }, change);
        const success = result.affected > 0;
        if (success) {
            return await this.courseEsService.partialUpdate(courseId, change);
        }
        return success;
    }
    async updateStatus(userId, courseId, status) {
        await this.validateAndThrow(courseId, userId);
        return this.partialUpdate(courseId, { status });
    }
    async updateAvgStar(courseId, avgStar) {
        const result = await this.partialUpdate(courseId, {
            avgStar,
            totalReview: () => `totalReview + 1`,
        });
        if (avgStar >= 3) {
            await this.highlightCourseService.increaseScore(courseId, 2);
        }
        return result;
    }
    async updateTotalEnrollment(courseId, totalEnrollment) {
        const result = await this.partialUpdate(courseId, { totalEnrollment });
        await this.highlightCourseService.increaseScore(courseId, 3);
        return result;
    }
    async findTotalView(courseId) {
        const { totalView, } = await this.courseRepository
            .createQueryBuilder()
            .where('id = :courseId', { courseId })
            .select('totalView')
            .getRawOne();
        return totalView;
    }
    async increaseTotalView(courseId) {
        const totalView = await this.findTotalView(courseId);
        if (Number.isNaN(totalView)) {
            throw new common_1.NotFoundException('This course is not exists');
        }
        const result = await this.partialUpdate(courseId, {
            totalView: totalView + 1,
        });
        await this.highlightCourseService.increaseScore(courseId, 1);
        return result;
    }
    async topOfWeeks(user) {
        const highlights = await this.highlightCourseService.topOfWeeks();
        const highlightSize = Array.isArray(highlights) ? highlights.length : 0;
        const highlightCourseIds = highlights.map((h) => h.courseId);
        const courses = await this.findByIdIn(highlightCourseIds);
        if (highlightSize < 5) {
            courses.push(...(await this.courseRepository.find({
                where: {
                    id: typeorm_2.Not(typeorm_2.In(highlightCourseIds)),
                    status: entity_status_1.EntityStatus.ACTIVE,
                },
                order: {
                    totalEnrollment: 'DESC',
                    avgStar: 'DESC',
                    totalView: 'DESC',
                },
                relations: ['creator', 'category', 'category.parent'],
                take: 5 - highlightSize,
            })));
        }
        return this.decor(courses, user);
    }
    async top(type, limit = 10, user) {
        const courses = await this.courseRepository.find({
            where: {
                status: entity_status_1.EntityStatus.ACTIVE,
            },
            order: {
                [type]: 'DESC',
            },
            relations: ['creator', 'category', 'category.parent'],
            take: limit,
        });
        return this.decor(courses, user);
    }
};
CourseService = CourseService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        course_es_service_1.CourseEsService,
        highlight_course_service_1.HighlightCourseService,
        watch_list_service_1.WatchListService,
        enrollment_service_1.EnrollmentService,
        content_service_1.ContentService])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map