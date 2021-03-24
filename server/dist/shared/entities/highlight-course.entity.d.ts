import { EntityStatus } from "../enums/entity-status";
import { Course } from "./course.entity";
export declare class HighlightCourse {
    courseId: number;
    week: number;
    year: number;
    score: number;
    status: EntityStatus;
    course: Course;
    static of(courseId: number, score?: number): HighlightCourse;
}
