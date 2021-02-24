import { IsNumber, Min } from 'class-validator';

export class UpdateStudyProcessRequest {
  @IsNumber()
  @Min(1)
  contentId: number;

  @IsNumber()
  @Min(1)
  duration: number;
}
