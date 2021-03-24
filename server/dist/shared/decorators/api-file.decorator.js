"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFile = void 0;
const swagger_1 = require("@nestjs/swagger");
const ApiFile = (fileName = 'file', formData = {}) => (target, propertyKey, descriptor) => {
    swagger_1.ApiBody({
        schema: {
            type: 'object',
            properties: Object.assign(Object.assign({}, formData), { [fileName]: {
                    type: 'string',
                    format: 'binary',
                } }),
        },
    })(target, propertyKey, descriptor);
};
exports.ApiFile = ApiFile;
//# sourceMappingURL=api-file.decorator.js.map