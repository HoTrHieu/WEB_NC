"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUtil = void 0;
class RequestUtil {
    static parseArray(value) {
        return !!value && !Array.isArray(value) ? [value] : value;
    }
}
exports.RequestUtil = RequestUtil;
//# sourceMappingURL=request.util.js.map