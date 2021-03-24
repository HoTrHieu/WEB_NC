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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const public_decorator_1 = require("../shared/decorators/public.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const paging_request_dto_1 = require("../shared/dtos/paging-request.dto");
const paging_response_dto_1 = require("../shared/dtos/paging-response.dto");
const review_request_dto_1 = require("./dto/review-request.dto");
const review_service_1 = require("./review.service");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    paginate(courseId, request) {
        return this.reviewService.paginate(courseId, request);
    }
    async review(courseId, req, body) {
        await this.reviewService.review(courseId, req.user.id, body);
        return boolean_response_dto_1.BooleanResponse.of(true);
    }
};
__decorate([
    common_1.Get('/paginate/:courseId'),
    swagger_1.ApiResponse({
        type: paging_response_dto_1.PagingResponse,
    }),
    public_decorator_1.Public(),
    __param(0, common_1.Param('courseId')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, paging_request_dto_1.PagingRequest]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "paginate", null);
__decorate([
    common_1.Post('/:courseId'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Request()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authed_request_1.AuthedRequest,
        review_request_dto_1.ReviewRequest]),
    __metadata("design:returntype", Promise)
], ReviewController.prototype, "review", null);
ReviewController = __decorate([
    swagger_1.ApiTags('Review'),
    common_1.Controller('/review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map