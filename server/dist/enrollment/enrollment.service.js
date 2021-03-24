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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enrollment_entity_1 = require("../shared/entities/enrollment.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const typeorm_2 = require("typeorm");
let EnrollmentService = class EnrollmentService {
    constructor(enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }
    findByUserId(userId) {
        return this.enrollmentRepository.find({
            where: { userId, status: entity_status_1.EntityStatus.ACTIVE }
        });
    }
    findByCourseIdIn(userId, courseIds) {
        return this.enrollmentRepository.find({
            where: {
                userId,
                courseId: typeorm_2.In(courseIds),
                status: entity_status_1.EntityStatus.ACTIVE
            }
        });
    }
    getDetail(courseId, userId) {
        return this.enrollmentRepository.findOne({
            where: { courseId, userId },
            relations: ['studyProcesses'],
        });
    }
    async exists(courseId, userId) {
        return !!(await this.findOne(courseId, userId));
    }
    findOne(courseId, userId) {
        return this.enrollmentRepository.findOne({ courseId, userId });
    }
    async findTotalEnrollment(courseId) {
        const { totalEnrollment } = await this.enrollmentRepository
            .createQueryBuilder()
            .where('courseId = :courseId', { courseId })
            .select('COUNT(*)', 'totalEnrollment')
            .getRawOne();
        return totalEnrollment || 0;
    }
    enroll(courseId, userId) {
        return this.enrollmentRepository.save(enrollment_entity_1.Enrollment.of(courseId, userId));
    }
};
EnrollmentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(enrollment_entity_1.Enrollment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EnrollmentService);
exports.EnrollmentService = EnrollmentService;
//# sourceMappingURL=enrollment.service.js.map