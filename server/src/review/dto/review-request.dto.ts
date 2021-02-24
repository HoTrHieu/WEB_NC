import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class ReviewRequest {
  @IsNumber()
  @Min(0)
  @Max(5)
  star: number;

  @IsString()
  @Length(1, 1000)
  feedback: string;
}
