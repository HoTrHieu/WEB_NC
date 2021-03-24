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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const user_role_1 = require("../enums/user-role");
const entity_status_1 = require("../enums/entity-status");
const course_entity_1 = require("./course.entity");
const watch_list_entity_1 = require("./watch-list.entity");
const enrollment_entity_1 = require("./enrollment.entity");
const review_entity_1 = require("./review.entity");
let User = class User {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    typeorm_1.Index('users_username_unique_idx', { unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255 }),
    typeorm_1.Index('users_email_unique_idx', { unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255 }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255 }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "introduction", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 255, nullable: true }),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: user_role_1.UserRole,
        default: user_role_1.UserRole.NORMAL,
    }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Date)
], User.prototype, "updatedDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('datetime', { nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "updatedEmailDate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => course_entity_1.Course, isArray: true }),
    typeorm_1.OneToMany(() => course_entity_1.Course, (course) => course.creator),
    __metadata("design:type", Array)
], User.prototype, "createdCourses", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => watch_list_entity_1.WatchList, isArray: true }),
    typeorm_1.OneToMany(() => watch_list_entity_1.WatchList, (watchList) => watchList.user),
    __metadata("design:type", Array)
], User.prototype, "watchLists", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => enrollment_entity_1.Enrollment, isArray: true }),
    typeorm_1.OneToMany(() => enrollment_entity_1.Enrollment, (enrollment) => enrollment.user),
    __metadata("design:type", Array)
], User.prototype, "enrollments", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => review_entity_1.Review, isArray: true }),
    typeorm_1.OneToMany(() => review_entity_1.Review, (review) => review.user),
    __metadata("design:type", Array)
], User.prototype, "reviews", void 0);
User = __decorate([
    typeorm_1.Entity({
        name: 'users',
    })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map