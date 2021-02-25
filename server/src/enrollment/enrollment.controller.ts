import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { UserRole } from 'src/shared/enums/user-role';
import { EnrollmentService } from './enrollment.service';

@ApiTags('Enrollment')
@Controller('/enrollment')
export class EnrollmentController {
  constructor(private enrollmentService: EnrollmentService) {}

  @Get('/paginate')
  @ApiResponse({
    type: PagingResponse,
  })
  @ApiBearerAuth()
  paginate(request: PagingRequest, @Request() req: AuthedRequest) {
    return this.enrollmentService.paginate(req.user.id, request);
  }

  @Get('/get-detail/:courseId')
  @ApiResponse({
    type: Enrollment,
  })
  @ApiBearerAuth()
  getDetail(@Param('courseId') courseId: number, @Request() req: AuthedRequest) {
    return this.enrollmentService.getDetail(courseId, req.user.id);
  }

  @Post('/enroll/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async upcateStatus(@Param('courseId') courseId: number, @Request() req: AuthedRequest) {
    await this.enrollmentService.enroll(courseId, req.user.id);
    return BooleanResponse.of(true);
  }
}
