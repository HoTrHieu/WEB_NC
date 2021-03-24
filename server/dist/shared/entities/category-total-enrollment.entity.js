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
var CategoryTotalEnrollment_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTotalEnrollment = void 0;
const swagger_1 = require("@nestjs/swagger");
const moment = require("moment");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const category_entity_1 = require("./category.entity");
let CategoryTotalEnrollment = CategoryTotalEnrollment_1 = class CategoryTotalEnrollment {
    static of(categoryId, totalEnrollment = 1) {
        const entity = new CategoryTotalEnrollment_1();
        entity.categoryId = categoryId;
        entity.totalEnrollment = totalEnrollment;
        entity.week = moment().week();
        entity.year = moment().year();
        return entity;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], CategoryTotalEnrollment.prototype, "categoryId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn('int'),
    __metadata("design:type", Number)
], CategoryTotalEnrollment.prototype, "week", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn('int'),
    __metadata("design:type", Number)
], CategoryTotalEnrollment.prototype, "year", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], CategoryTotalEnrollment.prototype, "totalEnrollment", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], CategoryTotalEnrollment.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => category_entity_1.Category }),
    typeorm_1.ManyToOne(() => category_entity_1.Category, (category) => category.categoryTotalEnrollments),
    typeorm_1.JoinColumn({ name: 'categoryId' }),
    __metadata("design:type", category_entity_1.Category)
], CategoryTotalEnrollment.prototype, "category", void 0);
CategoryTotalEnrollment = CategoryTotalEnrollment_1 = __decorate([
    typeorm_1.Entity({
        name: 'category_total_enrollments',
    })
], CategoryTotalEnrollment);
exports.CategoryTotalEnrollment = CategoryTotalEnrollment;
//# sourceMappingURL=category-total-enrollment.entity.js.map