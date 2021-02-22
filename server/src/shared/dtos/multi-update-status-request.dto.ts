import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, Min } from 'class-validator';
import { UpdateStatusRequest } from './update-status-request.dto';

export class MultiUpdateStatusRequest extends UpdateStatusRequest {
  @ApiProperty({ type: [Number] })
  @IsArray()
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  ids: number[];
}
