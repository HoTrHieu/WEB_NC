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
exports.Course = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const category_entity_1 = require("./category.entity");
const content_entity_1 = require("./content.entity");
const user_entity_1 = require("./user.entity");
const watch_list_entity_1 = require("./watch-list.entity");
const enrollment_entity_1 = require("./enrollment.entity");
const review_entity_1 = require("./review.entity");
const class_validator_1 = require("class-validator");
const highlight_course_entity_1 = require("./highlight-course.entity");
let Course = class Course {
};
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255, unique: true }),
    class_validator_1.IsString(),
    class_validator_1.Length(8, 255),
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('varchar', { length: 255, unique: true }),
    __metadata("design:type", String)
], Course.prototype, "slug", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('text'),
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    __metadata("design:type", String)
], Course.prototype, "subDescription", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('text'),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('float', { default: 0 }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_validator_1.Max(500),
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('float', { default: 0 }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_validator_1.Max(500),
    __metadata("design:type", Number)
], Course.prototype, "discount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 1000, default: '' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Course.prototype, "avatarPath", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 1000, default: '' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Course.prototype, "coverPath", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int', { default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "totalEnrollment", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('float', { default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "avgStar", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int', { default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "totalReview", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int', { default: 0 }),
    __metadata("design:type", Number)
], Course.prototype, "totalView", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], Course.prototype, "creatorId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('int'),
    class_validator_1.IsNumber(),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], Course.prototype, "categoryId", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], Course.prototype, "status", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Course.prototype, "updatedDate", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Course.prototype, "createdDate", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => category_entity_1.Category }),
    typeorm_1.ManyToOne(() => category_entity_1.Category, (category) => category.courses),
    typeorm_1.JoinColumn({ name: 'categoryId' }),
    __metadata("design:type", category_entity_1.Category)
], Course.prototype, "category", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => user_entity_1.User }),
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.createdCourses),
    typeorm_1.JoinColumn({ name: 'creatorId' }),
    __metadata("design:type", user_entity_1.User)
], Course.prototype, "creator", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => content_entity_1.Content }),
    typeorm_1.OneToMany(() => content_entity_1.Content, (content) => content.course),
    __metadata("design:type", Array)
], Course.prototype, "contents", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => watch_list_entity_1.WatchList }),
    typeorm_1.OneToMany(() => watch_list_entity_1.WatchList, (watchList) => watchList.course),
    __metadata("design:type", Array)
], Course.prototype, "watchLists", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => enrollment_entity_1.Enrollment }),
    typeorm_1.OneToMany(() => enrollment_entity_1.Enrollment, (enrollment) => enrollment.course),
    __metadata("design:type", Array)
], Course.prototype, "enrollments", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => review_entity_1.Review }),
    typeorm_1.OneToMany(() => review_entity_1.Review, (review) => review.course),
    __metadata("design:type", Array)
], Course.prototype, "reviews", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => highlight_course_entity_1.HighlightCourse }),
    typeorm_1.OneToMany(() => highlight_course_entity_1.HighlightCourse, (highlight) => highlight.course),
    __metadata("design:type", Array)
], Course.prototype, "highlights", void 0);
Course = __decorate([
    typeorm_1.Entity({
        name: 'courses',
    })
], Course);
exports.Course = Course;
//# sourceMappingURL=course.entity.js.map