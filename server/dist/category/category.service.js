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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../shared/entities/category.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const typeorm_2 = require("typeorm");
const moment = require("moment");
const top_category_of_week_dto_1 = require("./dto/top-category-of-week.dto");
const uuid_1 = require("uuid");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    findAll() {
        return this.categoryRepository.find({
            where: { status: entity_status_1.EntityStatus.ACTIVE, parentId: typeorm_2.IsNull() },
            relations: ['children'],
        });
    }
    findOne(categoryId) {
        return this.categoryRepository.findOne(categoryId);
    }
    async findParentId(categoryId) {
        const { parentId, } = await this.categoryRepository
            .createQueryBuilder()
            .where('id = :categoryId', { categoryId })
            .select('parentId')
            .getRawOne();
        return parentId;
    }
    async findTopOfWeek(limit = 10) {
        const categories = await this.categoryRepository
            .createQueryBuilder('c')
            .leftJoinAndSelect('c.categoryTotalEnrollments', 'cte')
            .where('cte.categoryId IS NULL or (cte.year = :year AND cte.week = :week)', {
            week: moment().week(),
            year: moment().year(),
        })
            .orderBy('cte.totalEnrollment', 'DESC')
            .addOrderBy('c.updatedDate', 'DESC')
            .limit(limit)
            .getMany();
        return categories.map((category) => {
            let totalEnrollment = 0;
            const cte = category.categoryTotalEnrollments[0];
            if (!!cte) {
                totalEnrollment = cte.totalEnrollment;
            }
            delete category.categoryTotalEnrollments;
            return top_category_of_week_dto_1.TopCategoryOfWeek.of(totalEnrollment, category);
        });
    }
    findOneByName(name) {
        return this.categoryRepository.findOne({ name });
    }
    async addCategory(name) {
        let category = await this.findOneByName(name);
        if (!category) {
            category = this.categoryRepository.create({ name, slug: uuid_1.v4() });
        }
        category.status = entity_status_1.EntityStatus.ACTIVE;
        return this.categoryRepository.save(category);
    }
    async updateStatus(id, status) {
        const result = await this.categoryRepository.update(id, {
            status,
        });
        return result.affected > 0;
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map