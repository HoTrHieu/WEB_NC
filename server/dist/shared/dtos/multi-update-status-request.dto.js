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
exports.MultiUpdateStatusRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const update_status_request_dto_1 = require("./update-status-request.dto");
class MultiUpdateStatusRequest extends update_status_request_dto_1.UpdateStatusRequest {
}
__decorate([
    swagger_1.ApiProperty({ type: [Number] }),
    class_validator_1.IsArray(),
    class_validator_1.IsNumber({}, { each: true }),
    class_validator_1.Min(1, { each: true }),
    __metadata("design:type", Array)
], MultiUpdateStatusRequest.prototype, "ids", void 0);
exports.MultiUpdateStatusRequest = MultiUpdateStatusRequest;
//# sourceMappingURL=multi-update-status-request.dto.js.map