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
var EsHelperService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsHelperService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const entity_status_1 = require("../shared/enums/entity-status");
const array_util_1 = require("../shared/utils/array.util");
let EsHelperService = EsHelperService_1 = class EsHelperService {
    constructor(esService) {
        this.esService = esService;
        this.logger = new common_1.Logger(EsHelperService_1.name);
    }
    async upsert(index, id, doc) {
        const result = await this.esService.update({
            index,
            id,
            refresh: true,
            body: {
                doc,
                doc_as_upsert: true,
            },
        });
        return (result.statusCode === common_1.HttpStatus.OK ||
            result.statusCode === common_1.HttpStatus.CREATED);
    }
    updateStatus(index, id, status) {
        return this.upsert(index, id, { status });
    }
    async bulk(items) {
        const bulkItems = array_util_1.ArrayUtil.flatMap(items.map((item) => item.toBulkItem()));
        if (bulkItems.length > 0) {
            const result = await this.esService.bulk({
                refresh: true,
                body: bulkItems,
            });
            if (result.body.errors) {
                this.logger.error(result.body.errors);
                return false;
            }
        }
        return true;
    }
};
EsHelperService = EsHelperService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService])
], EsHelperService);
exports.EsHelperService = EsHelperService;
//# sourceMappingURL=es-helper.service.js.map