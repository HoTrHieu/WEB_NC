import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { StudyProcess } from './study-process.entity';
export declare class Content {
    id: number;
    title: string;
    description: string;
    order: number;
    preview: boolean;
    videoPath: string;
    duration: number;
    courseId: number;
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    course: Course;
    studyProcesses: StudyProcess[];
}
