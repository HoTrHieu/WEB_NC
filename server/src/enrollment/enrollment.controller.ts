import { Controller, Get, Logger, Param, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { CategoryTotalEnrollmentService } from 'src/category-total-enrollment/category-total-enrollment.service';
import { CourseService } from 'src/course/course.service';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { EnrollmentService } from './enrollment.service';

@ApiTags('Enrollment')
@Controller('/enrollment')
export class EnrollmentController {
  private readonly logger = new Logger(EnrollmentController.name);

  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService,
    private categoryTotalEnrollmentService: CategoryTotalEnrollmentService,
  ) {}

  @Get('/:courseId')
  @ApiResponse({
    type: Enrollment,
  })
  @ApiBearerAuth()
  getDetail(
    @Param('courseId') courseId: number,
    @Request() req: AuthedRequest,
  ) {
    return this.enrollmentService.getDetail(courseId, req.user.id);
  }

  @Post('/enroll/:courseId')
  @ApiResponse({
    type: StdResponse,
  })
  @ApiBearerAuth()
  async enroll(
    @Param('courseId') courseId: number,
    @Request() req: AuthedRequest,
  ) {
    const savedEnrollment = await this.enrollmentService.enroll(
      courseId,
      req.user.id,
    );
    if (!!savedEnrollment) {
      const totalEnrollment = await this.enrollmentService.findTotalEnrollment(
        courseId,
      );
      let success = await this.courseService.updateTotalEnrollment(
        courseId,
        totalEnrollment,
      );
      if (success) {
        const categoryId = await this.courseService.findCategoryId(courseId);
        await this.categoryTotalEnrollmentService.increase(categoryId);
      } else {
        this.logger.error(
          `Update total enrollment failed for course: ${courseId}`,
        );
      }
    }
    return StdResponse.of(StdResponseCode.SUCCESS, true);
  }
}
