import { ContentService } from 'src/content/content.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { StudyProcess } from 'src/shared/entities/study-process.entity';
import { Repository } from 'typeorm';
import { UpdateStudyProcessRequest } from './dto/update-study-process-request.dto';
export declare class StudyProcessService {
    private studyProcessRepository;
    private enrollmentService;
    private contentService;
    constructor(studyProcessRepository: Repository<StudyProcess>, enrollmentService: EnrollmentService, contentService: ContentService);
    findByCourseId(courseId: number, userId: number): Promise<StudyProcess[]>;
    findOne(courseId: number, userId: number, contentId: number): Promise<StudyProcess>;
    update(courseId: number, userId: number, request: UpdateStudyProcessRequest): Promise<StudyProcess>;
}
