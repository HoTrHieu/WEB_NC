"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassUtils = void 0;
class ClassUtils {
    static copyFields(source, dest, useSourceFields = true) {
        const keys = useSourceFields ? source : dest;
        for (const k in keys) {
            dest[k] = source[k];
        }
        return dest;
    }
}
exports.ClassUtils = ClassUtils;
//# sourceMappingURL=class.util.js.map