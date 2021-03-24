import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { User } from './user.entity';
export declare class Review {
    userId: number;
    courseId: number;
    star: number;
    feedback: string;
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    user: User;
    course: Course;
    static of(courseId: number, userId: number, star: number, feedback: string): Review;
}
