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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const course_entity_1 = require("./course.entity");
const study_process_entity_1 = require("./study-process.entity");
let Content = class Content {
};
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255 }),
    class_validator_1.IsString(),
    class_validator_1.Length(4, 255),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('text', { nullable: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Content.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('int'),
    class_validator_1.IsInt(),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], Content.prototype, "order", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('boolean'),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], Content.prototype, "preview", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 1000 }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Content.prototype, "videoPath", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Content.prototype, "duration", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Content.prototype, "courseId", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], Content.prototype, "status", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.UpdateDateColumn(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Date)
], Content.prototype, "updatedDate", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Content.prototype, "createdDate", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => course_entity_1.Course }),
    typeorm_1.ManyToOne(() => course_entity_1.Course, (course) => course.contents),
    typeorm_1.JoinColumn({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.Course)
], Content.prototype, "course", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => study_process_entity_1.StudyProcess }),
    typeorm_1.OneToMany(() => study_process_entity_1.StudyProcess, (studyProcess) => studyProcess.content),
    __metadata("design:type", Array)
], Content.prototype, "studyProcesses", void 0);
Content = __decorate([
    typeorm_1.Entity({
        name: 'contents',
    })
], Content);
exports.Content = Content;
//# sourceMappingURL=content.entity.js.map