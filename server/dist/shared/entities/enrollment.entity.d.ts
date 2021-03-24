import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { StudyProcess } from './study-process.entity';
import { User } from './user.entity';
export declare class Enrollment {
    courseId: number;
    userId: number;
    amount: number;
    course: Course;
    user: User;
    studyProcesses: StudyProcess[];
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    static of(courseId: number, userId: number): Enrollment;
}
