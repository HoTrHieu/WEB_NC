import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { FileType } from 'src/shared/enums/file-type';

export class UploadRequest {
  @IsEnum(FileType)
  @ApiProperty({ enum: FileType })
  fileType: FileType;
}
