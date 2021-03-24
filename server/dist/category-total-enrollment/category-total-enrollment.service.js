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
exports.CategoryTotalEnrollmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_total_enrollment_entity_1 = require("../shared/entities/category-total-enrollment.entity");
const typeorm_2 = require("typeorm");
let CategoryTotalEnrollmentService = class CategoryTotalEnrollmentService {
    constructor(repository) {
        this.repository = repository;
    }
    async increase(categoryId) {
        const qb = this.repository
            .createQueryBuilder()
            .insert()
            .into(category_total_enrollment_entity_1.CategoryTotalEnrollment)
            .values(category_total_enrollment_entity_1.CategoryTotalEnrollment.of(categoryId));
        qb.expressionMap.onUpdate = {
            columns: 'totalEnrollment = totalEnrollment + 1',
        };
        return qb.execute();
    }
};
CategoryTotalEnrollmentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_total_enrollment_entity_1.CategoryTotalEnrollment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryTotalEnrollmentService);
exports.CategoryTotalEnrollmentService = CategoryTotalEnrollmentService;
//# sourceMappingURL=category-total-enrollment.service.js.map