import {
  Controller
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseService } from './course.service';

@ApiTags('Course')
@Controller('/course')
export class CourseController {
  constructor(
    private courseService: CourseService
  ) {}
}
