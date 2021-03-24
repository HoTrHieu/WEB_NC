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
exports.WatchListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const update_status_request_dto_1 = require("../shared/dtos/update-status-request.dto");
const watch_list_service_1 = require("./watch-list.service");
let WatchListController = class WatchListController {
    constructor(watchListService) {
        this.watchListService = watchListService;
    }
    async updateStatus(courseId, request, req) {
        await this.watchListService.updateStatus(courseId, req.user.id, request.status);
        return boolean_response_dto_1.BooleanResponse.of(true);
    }
};
__decorate([
    common_1.Put('/update-status/:courseId'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Body()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_request_dto_1.UpdateStatusRequest,
        authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], WatchListController.prototype, "updateStatus", null);
WatchListController = __decorate([
    swagger_1.ApiTags('Watch List'),
    common_1.Controller('/watch-list'),
    __metadata("design:paramtypes", [watch_list_service_1.WatchListService])
], WatchListController);
exports.WatchListController = WatchListController;
//# sourceMappingURL=watch-list.controller.js.map