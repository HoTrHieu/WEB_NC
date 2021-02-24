import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { FileType } from 'src/shared/enums/file-type';
import { EnumUtils } from 'src/shared/utils/enum.util';

export class UploadRequest {
  @IsEnum(FileType)
  @ApiProperty({ enum: EnumUtils.values(FileType) })
  fileType: FileType;
}
