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
exports.StudyProcessService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const content_service_1 = require("../content/content.service");
const enrollment_service_1 = require("../enrollment/enrollment.service");
const study_process_entity_1 = require("../shared/entities/study-process.entity");
const typeorm_2 = require("typeorm");
let StudyProcessService = class StudyProcessService {
    constructor(studyProcessRepository, enrollmentService, contentService) {
        this.studyProcessRepository = studyProcessRepository;
        this.enrollmentService = enrollmentService;
        this.contentService = contentService;
    }
    async findByCourseId(courseId, userId) {
        return this.studyProcessRepository.find({
            courseId,
            userId,
        });
    }
    async findOne(courseId, userId, contentId) {
        return this.studyProcessRepository.findOne({
            where: {
                courseId,
                userId,
                contentId,
            },
        });
    }
    async update(courseId, userId, request) {
        const content = await this.contentService.findOne(request.contentId);
        const done = request.duration === content.duration;
        let studyProcess = await this.findOne(courseId, userId, request.contentId);
        if (!studyProcess) {
            studyProcess = study_process_entity_1.StudyProcess.of(courseId, userId, request.contentId, request.duration, done);
        }
        else {
            studyProcess.done = studyProcess.done || done;
            studyProcess.duration = Math.max(studyProcess.duration, request.duration);
        }
        return this.studyProcessRepository.save(studyProcess);
    }
};
StudyProcessService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(study_process_entity_1.StudyProcess)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        enrollment_service_1.EnrollmentService,
        content_service_1.ContentService])
], StudyProcessService);
exports.StudyProcessService = StudyProcessService;
//# sourceMappingURL=study-process.service.js.map