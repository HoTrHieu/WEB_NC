import { UserRole } from '../enums/user-role';
import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { WatchList } from './watch-list.entity';
import { Enrollment } from './enrollment.entity';
import { Review } from './review.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    bio?: string;
    introduction?: string;
    passwordHash: string;
    role: UserRole;
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    updatedEmailDate: Date;
    createdCourses: Course[];
    watchLists: WatchList[];
    enrollments: Enrollment[];
    reviews: Review[];
}
