import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StudyProcess } from 'src/shared/entities/study-process.entity';
import { UpdateStudyProcessRequest } from './dto/update-study-process-request.dto';
import { StudyProcessService } from './study-process.service';
export declare class StudyProcessController {
    private studyProcessService;
    constructor(studyProcessService: StudyProcessService);
    findByCourseId(courseId: number, req: AuthedRequest): Promise<StudyProcess[]>;
    findOne(courseId: number, contentId: number, req: AuthedRequest): Promise<StudyProcess>;
    update(courseId: number, request: UpdateStudyProcessRequest, req: AuthedRequest): Promise<BooleanResponse>;
}
