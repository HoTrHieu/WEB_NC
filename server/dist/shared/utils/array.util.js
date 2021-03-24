"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtil = void 0;
class ArrayUtil {
    static flatMap(arr) {
        return arr.reduce((x, y) => x.concat(y), []);
    }
    static isEmpty(arr) {
        return !Array.isArray(arr) || arr.length === 0;
    }
}
exports.ArrayUtil = ArrayUtil;
//# sourceMappingURL=array.util.js.map