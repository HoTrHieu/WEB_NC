import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EntityStatus } from '../enums/entity-status';
import { EnumUtils } from '../utils/enum.util';

export class UpdateStatusRequest {
  @IsEnum(EntityStatus)
  @ApiProperty({ enum: EnumUtils.values(EntityStatus) })
  status: EntityStatus;
}
