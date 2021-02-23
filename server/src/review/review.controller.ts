import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { ReviewRequest } from './dto/review-request.dto';
import { ReviewService } from './review.service';

@ApiTags('Review')
@Controller('/review')
export class ReviewController {
  constructor(
    private reviewService: ReviewService
  ) {}

  @Get('/paginate/:courseId')
  @ApiResponse({
    type: PagingResponse
  })
  @ApiBearerAuth()
  paginate(
    @Query('courseId') courseId: number, 
    request: PagingRequest
  ) {
    return this.reviewService.paginate(courseId, request);
  }

  @Post('/review/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async upcateStatus(
    @Param('courseId') courseId: number,
    @Request() req: any,
    @Body() body: ReviewRequest
  ) {
    await this.reviewService.review(courseId, req.user.id, body);
    return BooleanResponse.of(true);
  }
}
