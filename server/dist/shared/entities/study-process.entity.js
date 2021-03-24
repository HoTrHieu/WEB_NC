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
var StudyProcess_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyProcess = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const content_entity_1 = require("./content.entity");
const enrollment_entity_1 = require("./enrollment.entity");
let StudyProcess = StudyProcess_1 = class StudyProcess {
    static of(courseId, userId, contentId, duration, done = false) {
        const studyProcess = new StudyProcess_1();
        studyProcess.duration = duration;
        studyProcess.done = done;
        studyProcess.courseId = courseId;
        studyProcess.userId = userId;
        studyProcess.contentId = contentId;
        return studyProcess;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], StudyProcess.prototype, "courseId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], StudyProcess.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], StudyProcess.prototype, "contentId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], StudyProcess.prototype, "duration", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('boolean'),
    __metadata("design:type", Boolean)
], StudyProcess.prototype, "done", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], StudyProcess.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Date)
], StudyProcess.prototype, "updatedDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], StudyProcess.prototype, "createdDate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => enrollment_entity_1.Enrollment }),
    typeorm_1.ManyToOne(() => enrollment_entity_1.Enrollment, (enrollment) => enrollment.studyProcesses),
    typeorm_1.JoinColumn([
        { name: 'courseId', referencedColumnName: 'courseId' },
        { name: 'userId', referencedColumnName: 'userId' },
    ]),
    __metadata("design:type", enrollment_entity_1.Enrollment)
], StudyProcess.prototype, "enrollment", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => content_entity_1.Content }),
    typeorm_1.ManyToOne(() => content_entity_1.Content, (content) => content.studyProcesses),
    typeorm_1.JoinColumn({ name: 'contentId' }),
    __metadata("design:type", content_entity_1.Content)
], StudyProcess.prototype, "content", void 0);
StudyProcess = StudyProcess_1 = __decorate([
    typeorm_1.Entity({
        name: 'study_processes',
    })
], StudyProcess);
exports.StudyProcess = StudyProcess;
//# sourceMappingURL=study-process.entity.js.map