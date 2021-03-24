import { EntityStatus } from '../enums/entity-status';
import { Content } from './content.entity';
import { Enrollment } from './enrollment.entity';
export declare class StudyProcess {
    courseId: number;
    userId: number;
    contentId: number;
    duration: number;
    done: boolean;
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    enrollment: Enrollment;
    content: Content;
    static of(courseId: number, userId: number, contentId: number, duration: number, done?: boolean): StudyProcess;
}
