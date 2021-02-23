import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentService } from 'src/content/content.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { StudyProcess } from 'src/shared/entities/study-process.entity';
import { Repository } from 'typeorm';
import { UpdateStudyProcessRequest } from './dto/update-study-process-request.dto';

@Injectable()
export class StudyProcessService {
  constructor(
    @InjectRepository(StudyProcess)
    private studyProcessRepository: Repository<StudyProcess>,
    private enrollmentService: EnrollmentService,
    private contentService: ContentService
  ) {}

  async findOne(courseId: number, userId: number, contentId: number) {
    return this.studyProcessRepository.findOne({
      courseId, userId, contentId
    });
  }

  async update(courseId: number, userId: number, request: UpdateStudyProcessRequest) {
    const enrollmentExists = await this.enrollmentService.exists(courseId, userId);
    if (!enrollmentExists) {
      throw new BadRequestException('Bạn chưa tham gia khóa học này');
    }

    const content = await this.contentService.findOne(request.contentId);
    const done = request.duration === content.duration;
    let studyProcess = await this.findOne(courseId, userId, request.contentId);
    if (!studyProcess) {
      studyProcess = StudyProcess.of(courseId, userId, request.contentId, request.duration, done);
    } else {
      studyProcess.done = studyProcess.done || done;
      studyProcess.duration = Math.max(studyProcess.duration, request.duration);
    }
    
    return this.studyProcessRepository.save(studyProcess);
  }
}
