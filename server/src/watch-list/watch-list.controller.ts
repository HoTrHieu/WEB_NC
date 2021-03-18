import {
  Body,
  Controller,
  Param,
  Put,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { WatchListService } from './watch-list.service';

@ApiTags('Watch List')
@Controller('/watch-list')
export class WatchListController {
  constructor(private watchListService: WatchListService) {}

  @Put('/update-status/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateStatus(
    @Param('courseId') courseId: number,
    @Body() request: UpdateStatusRequest,
    @Request() req: AuthedRequest,
  ) {
    await this.watchListService.updateStatus(
      courseId,
      req.user.id,
      request.status,
    );
    return BooleanResponse.of(true);
  }
}
