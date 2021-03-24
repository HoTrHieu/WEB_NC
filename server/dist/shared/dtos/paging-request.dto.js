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
exports.PagingRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PagingRequest {
    get offset() {
        return (this.page - 1) * this.pageSize;
    }
}
__decorate([
    swagger_1.ApiProperty({ minimum: 1 }),
    class_validator_1.IsNumber(),
    class_transformer_1.Type(() => Number),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], PagingRequest.prototype, "page", void 0);
__decorate([
    swagger_1.ApiProperty({ minimum: 1 }),
    class_validator_1.IsNumber(),
    class_transformer_1.Type(() => Number),
    class_validator_1.Min(1),
    __metadata("design:type", Number)
], PagingRequest.prototype, "pageSize", void 0);
exports.PagingRequest = PagingRequest;
//# sourceMappingURL=paging-request.dto.js.map