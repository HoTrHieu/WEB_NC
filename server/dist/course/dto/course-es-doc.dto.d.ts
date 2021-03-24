import { Course } from 'src/shared/entities/course.entity';
export declare class CourseEsDoc {
    id: number;
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    avatarPath: string;
    coverPath: string;
    totalEnrollment: number;
    totalView: number;
    totalReview: number;
    avgStar: number;
    creatorId: number;
    categoryId: number[];
    createdDate: Date;
    updatedDate: Date;
    static of(course: Course): CourseEsDoc;
}
