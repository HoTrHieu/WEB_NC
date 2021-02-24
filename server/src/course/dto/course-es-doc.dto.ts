import { Course } from "src/shared/entities/course.entity";
import { ClassUtils } from "src/shared/utils/class.util";

export class CourseEsDoc {
  id: number;
  title: string;
  subDescription: string;
  description: string;
  price: number;
  avatarPath: string;
  coverPath: string;
  totalEnrollment: number;
  avgStar: number;
  creatorId: number;
  categoryId: number;
  createdDate: Date;
  updatedDate: Date;

  static of(course: Course) {
    const doc = new CourseEsDoc();
    return ClassUtils.copyFields(course, doc, false);
  }
}