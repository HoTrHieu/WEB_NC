"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUtils = void 0;
class EnumUtils {
    static values(e) {
        try {
            return Object.keys(e)
                .filter((k) => isNaN(Number(k)))
                .map((k) => e[k]);
        }
        catch (_a) {
            return null;
        }
    }
}
exports.EnumUtils = EnumUtils;
//# sourceMappingURL=enum.util.js.map