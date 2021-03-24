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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../shared/decorators/public.decorator");
const role_decorator_1 = require("../shared/decorators/role.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const update_status_request_dto_1 = require("../shared/dtos/update-status-request.dto");
const category_entity_1 = require("../shared/entities/category.entity");
const std_response_code_1 = require("../shared/enums/std-response-code");
const user_role_1 = require("../shared/enums/user-role");
const category_service_1 = require("./category.service");
const add_category_request_dto_1 = require("./dto/add-category-request.dto");
const top_category_of_week_dto_1 = require("./dto/top-category-of-week.dto");
let CategoryController = class CategoryController {
    constructor(categoryService, cacheManager) {
        this.categoryService = categoryService;
        this.cacheManager = cacheManager;
    }
    findAllCategory() {
        return this.categoryService.findAll();
    }
    findTopOfWeek() {
        return this.categoryService.findTopOfWeek();
    }
    async addCategory(request) {
        const category = await this.categoryService.addCategory(request.name);
        this.cacheManager.del('/all');
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, category.id);
    }
    async updateStatus(id, request) {
        const isSuccess = await this.categoryService.updateStatus(id, request.status);
        if (isSuccess) {
            this.cacheManager.del('/all');
        }
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/all'),
    swagger_1.ApiResponse({
        type: category_entity_1.Category,
        isArray: true,
    }),
    common_1.UseInterceptors(common_1.CacheInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findAllCategory", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/top-of-weeks'),
    swagger_1.ApiResponse({
        type: top_category_of_week_dto_1.TopCategoryOfWeek,
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "findTopOfWeek", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.ADMIN),
    common_1.Post(),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_category_request_dto_1.AddCategoryRequest]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategory", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.ADMIN),
    common_1.Put('/update-status/:id'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_request_dto_1.UpdateStatusRequest]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "updateStatus", null);
CategoryController = __decorate([
    swagger_1.ApiTags('Category'),
    common_1.Controller('/category'),
    __param(1, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [category_service_1.CategoryService, Object])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map