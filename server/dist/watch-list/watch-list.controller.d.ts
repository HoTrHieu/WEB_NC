import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { WatchListService } from './watch-list.service';
export declare class WatchListController {
    private watchListService;
    constructor(watchListService: WatchListService);
    updateStatus(courseId: number, request: UpdateStatusRequest, req: AuthedRequest): Promise<BooleanResponse>;
}
