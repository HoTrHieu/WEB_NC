import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EntityStatus } from '../entities/common/status.entity';
import { EnumUtils } from '../utils/enum.util';

export class UpdateStatusRequest {
  @IsEnum(EntityStatus)
  @ApiProperty({ enum: EnumUtils.values(EntityStatus) })
  status: EntityStatus;
}
