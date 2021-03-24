"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseEsDoc = void 0;
const course_entity_1 = require("../../shared/entities/course.entity");
class CourseEsDoc {
    static of(course) {
        var _a;
        const doc = new CourseEsDoc();
        doc.id = course.id;
        doc.title = course.title;
        doc.price = course.price - course.discount;
        doc.originalPrice = course.price;
        doc.discount = course.discount;
        doc.avatarPath = course.avatarPath;
        doc.coverPath = course.coverPath;
        doc.totalEnrollment = course.totalEnrollment;
        doc.totalView = course.totalView;
        doc.totalReview = course.totalReview;
        doc.avgStar = course.avgStar;
        doc.creatorId = course.creatorId;
        doc.createdDate = course.createdDate;
        doc.updatedDate = course.updatedDate;
        doc.categoryId = [course.categoryId];
        if (!!((_a = course.category) === null || _a === void 0 ? void 0 : _a.parentId)) {
            doc.categoryId.push(course.category.parentId);
        }
        return doc;
    }
}
exports.CourseEsDoc = CourseEsDoc;
//# sourceMappingURL=course-es-doc.dto.js.map