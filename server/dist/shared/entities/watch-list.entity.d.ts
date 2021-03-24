import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { User } from './user.entity';
export declare class WatchList {
    courseId: number;
    userId: number;
    course: Course;
    user: User;
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    static of(courseId: number, userId: number): WatchList;
}
