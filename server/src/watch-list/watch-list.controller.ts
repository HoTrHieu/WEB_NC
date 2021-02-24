import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { UserRole } from 'src/shared/enums/user-role';
import { WatchListService } from './watch-list.service';

@ApiTags('Watch List')
@Controller('/watch-list')
export class WatchListController {
  constructor(private watchListService: WatchListService) {}

  @Get('/paginate')
  @ApiResponse({
    type: PagingResponse,
  })
  @ApiBearerAuth()
  paginate(request: PagingRequest, @Request() req: any) {
    return this.watchListService.paginate(req.user.id, request);
  }

  @Role(UserRole.ADMIN)
  @Put('/update-status/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async upcateStatus(
    @Param('courseId') courseId: number,
    @Body() request: UpdateStatusRequest,
    @Request() req: any,
  ) {
    await this.watchListService.updateStatus(
      courseId,
      req.user.id,
      request.status,
    );
    return BooleanResponse.of(true);
  }
}
