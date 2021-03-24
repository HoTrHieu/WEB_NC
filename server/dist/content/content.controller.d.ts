import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { Content } from 'src/shared/entities/content.entity';
import { ContentService } from './content.service';
export declare class ContentController {
    private contentService;
    constructor(contentService: ContentService);
    add(courseId: number, content: Content, req: AuthedRequest): Promise<StdResponse<number>>;
    update(contentId: number, content: Content, req: AuthedRequest): Promise<BooleanResponse>;
    updateStatus(id: number, request: UpdateStatusRequest): Promise<BooleanResponse>;
}
