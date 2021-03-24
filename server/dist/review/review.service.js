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
var ReviewService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const course_service_1 = require("../course/course.service");
const enrollment_service_1 = require("../enrollment/enrollment.service");
const paging_request_dto_1 = require("../shared/dtos/paging-request.dto");
const review_entity_1 = require("../shared/entities/review.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const paging_util_1 = require("../shared/utils/paging.util");
const typeorm_2 = require("typeorm");
let ReviewService = ReviewService_1 = class ReviewService {
    constructor(reviewRepository, enrollmentService, courseService) {
        this.reviewRepository = reviewRepository;
        this.enrollmentService = enrollmentService;
        this.courseService = courseService;
        this.logger = new common_1.Logger(ReviewService_1.name);
    }
    paginate(courseId, request) {
        return paging_util_1.PagingUtil.paginate(this.reviewRepository, request, {
            where: { courseId, status: entity_status_1.EntityStatus.ACTIVE },
            relations: ['user'],
            order: {
                updatedDate: 'DESC'
            }
        });
    }
    async findAvgStar(courseId) {
        const { avgStar } = await this.reviewRepository
            .createQueryBuilder()
            .where('courseId = :courseId', { courseId })
            .select('AVG(star)', 'avgStar')
            .getRawOne();
        return avgStar || 0;
    }
    async review(courseId, userId, body) {
        if (!(await this.courseService.exists(userId))) {
            throw new common_1.BadRequestException('This course is not exists');
        }
        if (!(await this.enrollmentService.exists(courseId, userId))) {
            throw new common_1.BadRequestException('You are not yet enrolled in this course');
        }
        const savedReview = await this.reviewRepository.save(review_entity_1.Review.of(courseId, userId, body.star, body.feedback));
        if (!!savedReview) {
            const avgStar = await this.findAvgStar(courseId);
            const success = await this.courseService.updateAvgStar(courseId, avgStar);
            if (!success) {
                this.logger.error(`Update average star failed for course: ${courseId}`);
            }
        }
        return savedReview;
    }
};
ReviewService = ReviewService_1 = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enrollment_service_1.EnrollmentService,
        course_service_1.CourseService])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map