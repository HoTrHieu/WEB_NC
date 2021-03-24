"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckResponse = void 0;
class CheckResponse {
    static of(exists) {
        const res = new CheckResponse();
        res.exists = exists;
        return res;
    }
}
exports.CheckResponse = CheckResponse;
//# sourceMappingURL=check-response.dto.js.map