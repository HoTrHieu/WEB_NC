"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.esModule = void 0;
const config_1 = require("@nestjs/config");
const elasticsearch_1 = require("@nestjs/elasticsearch");
exports.esModule = elasticsearch_1.ElasticsearchModule.registerAsync({
    useFactory: (config) => ({
        node: config.get('settings.es.node'),
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=elasticsearch.module.js.map