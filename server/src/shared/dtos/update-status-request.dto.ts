import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EntityStatus } from '../enums/entity-status';

export class UpdateStatusRequest {
  @IsEnum(EntityStatus)
  @ApiProperty({ enum: EntityStatus })
  status: EntityStatus;
}
