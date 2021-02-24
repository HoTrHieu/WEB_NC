import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { FileType } from 'src/shared/enums/file-type';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UploaderService } from './uploader.service';

@ApiTags('Uploader')
@Controller('/uploader')
export class UploaderController {
  constructor(private uploaderService: UploaderService) {}

  @Post('/upload')
  @ApiResponse({
    type: StdResponse,
  })
  @ApiBearerAuth()
  async upcateStatus(
    @Body() fileType: FileType,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const folder = UploaderService.Folder[fileType];
    if (!folder) {
      throw new BadRequestException('File type is invalid');
    }
    const filePath = await this.uploaderService.upload(folder, file);
    return StdResponse.of(StdResponseCode.SUCCESS, filePath);
  }
}
