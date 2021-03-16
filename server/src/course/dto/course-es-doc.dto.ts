import { Course } from 'src/shared/entities/course.entity';

export class CourseEsDoc {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  avatarPath: string;
  coverPath: string;
  totalEnrollment: number;
  totalView: number;
  totalReview: number;
  avgStar: number;
  creatorId: number;
  categoryId: number[];
  createdDate: Date;
  updatedDate: Date;

  static of(course: Course) {
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
    if (!!course.category?.parentId) {
      doc.categoryId.push(course.category.parentId);
    }
    return doc;
  }
}
