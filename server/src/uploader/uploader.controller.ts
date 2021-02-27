import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiFile } from 'src/shared/decorators/api-file.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { FileType } from 'src/shared/enums/file-type';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UploadRequest } from './dto/upload-request.dto';
import { UploaderService } from './uploader.service';

@ApiTags('Uploader')
@Controller('/uploader')
export class UploaderController {
  constructor(private uploaderService: UploaderService) {}

  @Post('/upload')
  @ApiResponse({
    type: StdResponse,
  })
  @ApiConsumes('multipart/form-data')
  @ApiFile('file', {
    fileType: {
      enum: FileType
    }
  })
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Body() request: UploadRequest,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const filePath = await this.uploaderService.upload(request.fileType, file);
    return StdResponse.of(StdResponseCode.SUCCESS, filePath);
  }
}
