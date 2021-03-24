"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_module_1 = require("./shared/modules/swagger.module");
const path = require("path");
async function bootstrap() {
    process.env.ROOT_PATH = path.resolve(__dirname, '..');
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('/api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    swagger_module_1.useSwagger(app);
    await app.listen(process.env.PORT || 2222);
}
bootstrap();
//# sourceMappingURL=main.js.map