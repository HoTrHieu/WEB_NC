"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function createDocument(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('[Web NC] Fademy')
        .setDescription('[Web NC] Fademy - API Document')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
}
function useSwagger(app) {
    createDocument(app);
}
exports.useSwagger = useSwagger;
//# sourceMappingURL=swagger.module.js.map