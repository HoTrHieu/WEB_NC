import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { Repository } from 'typeorm';
export declare class EnrollmentService {
    private enrollmentRepository;
    constructor(enrollmentRepository: Repository<Enrollment>);
    findByUserId(userId: number): Promise<Enrollment[]>;
    findByCourseIdIn(userId: number, courseIds: number[]): Promise<Enrollment[]>;
    getDetail(courseId: number, userId: number): Promise<Enrollment>;
    exists(courseId: number, userId: number): Promise<boolean>;
    findOne(courseId: number, userId: number): Promise<Enrollment>;
    findTotalEnrollment(courseId: number): Promise<any>;
    enroll(courseId: number, userId: number): Promise<Enrollment>;
}
