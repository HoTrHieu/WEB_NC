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
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { Public } from 'src/shared/decorators/public.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { ReviewRequest } from './dto/review-request.dto';
import { ReviewService } from './review.service';

@ApiTags('Review')
@Controller('/review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get('/paginate/:courseId')
  @ApiResponse({
    type: PagingResponse,
  })
  @Public()
  paginate(@Param('courseId') courseId: number, @Query() request: PagingRequest) {
    return this.reviewService.paginate(courseId, request);
  }

  @Post('/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async review(
    @Param('courseId') courseId: number,
    @Request() req: AuthedRequest,
    @Body() body: ReviewRequest,
  ) {
    await this.reviewService.review(courseId, req.user.id, body);
    return BooleanResponse.of(true);
  }
}
