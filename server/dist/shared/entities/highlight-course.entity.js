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
var HighlightCourse_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightCourse = void 0;
const swagger_1 = require("@nestjs/swagger");
const moment = require("moment");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const course_entity_1 = require("./course.entity");
let HighlightCourse = HighlightCourse_1 = class HighlightCourse {
    static of(courseId, score = 0) {
        const entity = new HighlightCourse_1();
        entity.courseId = courseId;
        entity.score = score;
        entity.week = moment().week();
        entity.year = moment().year();
        return entity;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], HighlightCourse.prototype, "courseId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn('int'),
    __metadata("design:type", Number)
], HighlightCourse.prototype, "week", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn('int'),
    __metadata("design:type", Number)
], HighlightCourse.prototype, "year", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int', { default: 0 }),
    __metadata("design:type", Number)
], HighlightCourse.prototype, "score", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], HighlightCourse.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => course_entity_1.Course }),
    typeorm_1.ManyToOne(() => course_entity_1.Course, (course) => course.highlights),
    typeorm_1.JoinColumn({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.Course)
], HighlightCourse.prototype, "course", void 0);
HighlightCourse = HighlightCourse_1 = __decorate([
    typeorm_1.Entity({
        name: 'highlight_courses'
    })
], HighlightCourse);
exports.HighlightCourse = HighlightCourse;
//# sourceMappingURL=highlight-course.entity.js.map