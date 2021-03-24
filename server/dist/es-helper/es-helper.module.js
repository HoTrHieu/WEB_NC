"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsHelperModule = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_module_1 = require("../shared/modules/elasticsearch.module");
const es_helper_service_1 = require("./es-helper.service");
let EsHelperModule = class EsHelperModule {
};
EsHelperModule = __decorate([
    common_1.Module({
        imports: [elasticsearch_module_1.esModule],
        providers: [es_helper_service_1.EsHelperService],
        exports: [es_helper_service_1.EsHelperService],
    })
], EsHelperModule);
exports.EsHelperModule = EsHelperModule;
//# sourceMappingURL=es-helper.module.js.map