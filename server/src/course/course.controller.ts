import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { Public } from 'src/shared/decorators/public.decorator';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { Course } from 'src/shared/entities/course.entity';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UserRole } from 'src/shared/enums/user-role';
import { CourseService } from './course.service';
import { CourseSearchRequest } from './dto/course-search-request.dto';

@ApiTags('Course')
@Controller('/course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Public()
  @Get('/search')
  @ApiResponse({
    type: PagingResponse,
  })
  @UseInterceptors(ClassSerializerInterceptor)
  search(@Query() request: CourseSearchRequest) {
    return this.courseService.search(request);
  }

  @Public()
  @Get('/:courseId')
  @ApiResponse({
    type: Course,
  })
  @UseInterceptors(ClassSerializerInterceptor)
  getDetail(@Param('courseId') courseId: number) {
    return this.courseService.getDetail(courseId);
  }

  @Role(UserRole.TEACHER)
  @Post('/')
  @ApiResponse({
    type: StdResponse,
  })
  @ApiBearerAuth()
  async add(@Body() course: Course, @Request() req: AuthedRequest) {
    const newCourse = await this.courseService.add(req.user.id, course);
    return StdResponse.of(StdResponseCode.SUCCESS, newCourse.id);
  }

  @Role(UserRole.TEACHER)
  @Put('/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async update(
    @Param('courseId') courseId: number,
    @Body() course: Course,
    @Request() req: AuthedRequest,
  ) {
    const isSuccess = await this.courseService.update(
      req.user.id,
      courseId,
      course,
    );
    return BooleanResponse.of(isSuccess);
  }

  @Role(UserRole.TEACHER)
  @Put('/update-status/:id')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateStatus(
    @Param('id') id: number,
    @Body() request: UpdateStatusRequest,
    @Request() req: AuthedRequest,
  ) {
    const isSuccess = await this.courseService.updateStatus(
      req.user.id,
      id,
      request.status,
    );
    return BooleanResponse.of(isSuccess);
  }

  @Put('/increase-total-view/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async increaseTotalView(
    @Param('id') courseId: number,
  ) {
    const isSuccess = await this.courseService.increaseTotalView(courseId);
    return BooleanResponse.of(isSuccess);
  }
}