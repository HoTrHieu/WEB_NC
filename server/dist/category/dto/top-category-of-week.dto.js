"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopCategoryOfWeek = void 0;
const category_entity_1 = require("../../shared/entities/category.entity");
class TopCategoryOfWeek {
    static of(totalEnrollment, category) {
        const rs = new TopCategoryOfWeek();
        rs.totalEnrollment = totalEnrollment;
        rs.category = category;
        return rs;
    }
}
exports.TopCategoryOfWeek = TopCategoryOfWeek;
//# sourceMappingURL=top-category-of-week.dto.js.map