import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Headers,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiFile } from 'src/shared/decorators/api-file.decorator';
import { Role } from 'src/shared/decorators/role.decorator';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { FileType } from 'src/shared/enums/file-type';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UserRole } from 'src/shared/enums/user-role';
import { UploaderService } from './uploader.service';

@ApiTags('Uploader')
@Controller('/uploader')
export class UploaderController {
  constructor(private uploaderService: UploaderService) {}

  @Role(UserRole.TEACHER, UserRole.ADMIN)
  @Post('/upload')
  @ApiResponse({
    type: StdResponse,
  })
  @ApiConsumes('multipart/form-data')
  @ApiFile('file')
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Headers('x-file-type') fileType: FileType,
    @Headers('x-upload-state') state: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const filePath = await this.uploaderService.upload(fileType, file);
    return StdResponse.of(StdResponseCode.SUCCESS, {
      filePath,
      state
    });
  }
}
