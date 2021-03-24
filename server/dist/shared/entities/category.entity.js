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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const category_total_enrollment_entity_1 = require("./category-total-enrollment.entity");
const course_entity_1 = require("./course.entity");
let Category = Category_1 = class Category {
};
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255, unique: true }),
    class_validator_1.IsString(),
    class_validator_1.Length(1, 255),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('varchar', { length: 255, unique: true }),
    class_validator_1.IsString(),
    class_validator_1.Length(1, 255),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('int', { nullable: true }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], Category.prototype, "parentId", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], Category.prototype, "status", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.UpdateDateColumn(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Date)
], Category.prototype, "updatedDate", void 0);
__decorate([
    swagger_1.ApiResponseProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Category.prototype, "createdDate", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => Category_1 }),
    typeorm_1.OneToMany(() => Category_1, (category) => category.parent, { cascade: ['insert'] }),
    __metadata("design:type", Array)
], Category.prototype, "children", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => category_total_enrollment_entity_1.CategoryTotalEnrollment }),
    typeorm_1.OneToMany(() => category_total_enrollment_entity_1.CategoryTotalEnrollment, (cte) => cte.category),
    __metadata("design:type", Array)
], Category.prototype, "categoryTotalEnrollments", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => Category_1 }),
    typeorm_1.ManyToOne(() => Category_1, (category) => category.children),
    typeorm_1.JoinColumn({ name: 'parentId' }),
    __metadata("design:type", Category)
], Category.prototype, "parent", void 0);
__decorate([
    swagger_1.ApiResponseProperty({ type: () => course_entity_1.Course }),
    typeorm_1.OneToMany(() => course_entity_1.Course, (course) => course.category),
    __metadata("design:type", Array)
], Category.prototype, "courses", void 0);
Category = Category_1 = __decorate([
    typeorm_1.Entity({
        name: 'categories',
    })
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map