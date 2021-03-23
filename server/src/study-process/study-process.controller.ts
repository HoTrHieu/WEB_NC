import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StudyProcess } from 'src/shared/entities/study-process.entity';
import { UserRole } from 'src/shared/enums/user-role';
import { UpdateStudyProcessRequest } from './dto/update-study-process-request.dto';
import { StudyProcessService } from './study-process.service';

@ApiTags('Study Process')
@Controller('/study-process')
export class StudyProcessController {
  constructor(private studyProcessService: StudyProcessService) {}

  @Get('/find-by-course-id/:courseId')
  @ApiResponse({
    type: StudyProcess,
    isArray: true,
  })
  @ApiBearerAuth()
  async findByCourseId(
    @Param('courseId') courseId: number,
    @Request() req: AuthedRequest,
  ) {
    return this.studyProcessService.findByCourseId(courseId, req.user.id);
  }

  @Get('/find-one/:courseId')
  @ApiResponse({
    type: StudyProcess
  })
  @ApiBearerAuth()
  async findOne(
    @Param('courseId') courseId: number,
    @Query('contentId') contentId: number,
    @Request() req: AuthedRequest,
  ) {
    return this.studyProcessService.findOne(courseId, req.user.id, contentId);
  }

  @Put('/:courseId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async update(
    @Param('courseId') courseId: number,
    @Body() request: UpdateStudyProcessRequest,
    @Request() req: AuthedRequest,
  ) {
    await this.studyProcessService.update(courseId, req.user.id, request);
    return BooleanResponse.of(true);
  }
}
