import { HighlightCourse } from "src/shared/entities/highlight-course.entity";
import { Repository } from "typeorm";
export declare class HighlightCourseService {
    private repository;
    constructor(repository: Repository<HighlightCourse>);
    increaseScore(courseId: number, value?: number): Promise<import("typeorm").InsertResult>;
    topOfWeeks(): Promise<HighlightCourse[]>;
}
