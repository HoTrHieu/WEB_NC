import { Body, Controller, Param, Post, Put, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthedRequest } from 'src/auth/dto/authed-request';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { Content } from 'src/shared/entities/content.entity';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UserRole } from 'src/shared/enums/user-role';
import { ContentService } from './content.service';

@ApiTags('Content')
@Controller('/content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Role(UserRole.TEACHER)
  @Post('/:courseId')
  @ApiResponse({
    type: StdResponse,
  })
  @ApiBearerAuth()
  async add(
    @Param('courseId') courseId: number,
    @Body() content: Content,
    @Request() req: AuthedRequest,
  ) {
    const newContent = await this.contentService.add(
      courseId,
      req.user.id,
      content,
    );
    return StdResponse.of(StdResponseCode.SUCCESS, newContent.id);
  }

  @Role(UserRole.TEACHER)
  @Put('/:contentId')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async update(
    @Param('contentId') contentId: number,
    @Body() content: Content,
    @Request() req: AuthedRequest,
  ) {
    const isSuccess = await this.contentService.update(
      req.user.id,
      contentId,
      content,
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
  ) {
    const isSuccess = await this.contentService.updateStatus(
      id,
      request.status,
    );
    return BooleanResponse.of(isSuccess);
  }
}
