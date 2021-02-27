import { Body, Controller, Param, Put, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { UserRole } from 'src/shared/enums/user-role';
import { UpdateStudyProcessRequest } from './dto/update-study-process-request.dto';
import { StudyProcessService } from './study-process.service';

@ApiTags('Study Process')
@Controller('/study-process')
export class StudyProcessController {
  constructor(private studyProcessService: StudyProcessService) {}

  @Role(UserRole.ADMIN)
  @Put('/:enrollmentId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async updateStatus(
    @Param('courseId') courseId: number,
    @Body() request: UpdateStudyProcessRequest,
    @Request() req: any,
  ) {
    await this.studyProcessService.update(courseId, req.user.id, request);
    return BooleanResponse.of(true);
  }
}
