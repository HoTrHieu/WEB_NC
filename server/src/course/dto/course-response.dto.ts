import { Course } from "src/shared/entities/course.entity";

export class CourseResponse extends Course {
  isWatchList?: boolean;
}