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
exports.CourseSearchRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const search_request_dto_1 = require("../../shared/dtos/search-request.dto");
const order_direction_1 = require("../../shared/enums/order-direction");
const request_util_1 = require("../../shared/utils/request.util");
const course_order_by_1 = require("../enums/course-order-by");
class CourseSearchRequest extends search_request_dto_1.SearchRequest {
    getIds() {
        return request_util_1.RequestUtil.parseArray(this.ids);
    }
    getCategoryIds() {
        return request_util_1.RequestUtil.parseArray(this.categoryIds);
    }
    get isSort() {
        return !!this.orderBy && !!this.orderDirection;
    }
    get isCategoryIdsExists() {
        const categoryIds = this.getCategoryIds();
        return !!categoryIds && categoryIds.length > 0;
    }
    get isIdsExists() {
        const ids = this.getIds();
        return !!ids && ids.length > 0;
    }
    get isFromPriceExists() {
        return !isNaN(this.fromPrice);
    }
    get isToPriceExists() {
        return !isNaN(this.toPrice);
    }
    get isFromStarExists() {
        return !isNaN(this.fromStar);
    }
    get isToStarExists() {
        return !isNaN(this.toStar);
    }
    get isOnlyWatchListExists() {
        return !!this.onlyWatchList;
    }
    get isOnlyEnrollmentExists() {
        return !!this.onlyEnrollment;
    }
    get isCreatorIdExists() {
        return !!this.creatorId;
    }
    get isSearching() {
        return (this.isCategoryIdsExists ||
            this.isSearchTermExists ||
            this.isFromPriceExists ||
            this.isToPriceExists ||
            this.isFromStarExists ||
            this.isToStarExists ||
            this.isIdsExists ||
            this.isOnlyEnrollmentExists ||
            this.isCreatorIdExists);
    }
}
__decorate([
    swagger_1.ApiPropertyOptional({ type: [Number] }),
    class_validator_1.IsNumber({}, { each: true }),
    class_validator_1.Min(1, { each: true }),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CourseSearchRequest.prototype, "ids", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: [Number] }),
    class_validator_1.IsNumber({}, { each: true }),
    class_validator_1.Min(1, { each: true }),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CourseSearchRequest.prototype, "categoryIds", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: Number }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CourseSearchRequest.prototype, "fromPrice", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: Number }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CourseSearchRequest.prototype, "toPrice", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: Number }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CourseSearchRequest.prototype, "fromStar", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: Number }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(0),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CourseSearchRequest.prototype, "toStar", void 0);
__decorate([
    class_validator_1.IsEnum(course_order_by_1.CourseOrderBy),
    swagger_1.ApiPropertyOptional({ enum: course_order_by_1.CourseOrderBy }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CourseSearchRequest.prototype, "orderBy", void 0);
__decorate([
    class_validator_1.IsEnum(order_direction_1.OrderDirection),
    swagger_1.ApiPropertyOptional({ enum: order_direction_1.OrderDirection }),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CourseSearchRequest.prototype, "orderDirection", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    class_transformer_1.Type(() => Boolean),
    __metadata("design:type", Boolean)
], CourseSearchRequest.prototype, "onlyWatchList", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    class_transformer_1.Type(() => Boolean),
    __metadata("design:type", Boolean)
], CourseSearchRequest.prototype, "onlyEnrollment", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: Number }),
    class_validator_1.IsNumber(),
    class_validator_1.Min(1),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CourseSearchRequest.prototype, "creatorId", void 0);
exports.CourseSearchRequest = CourseSearchRequest;
//# sourceMappingURL=course-search-request.dto.js.map