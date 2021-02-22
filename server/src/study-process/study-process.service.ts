import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudyProcess } from 'src/shared/entities/study-process.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudyProcessService {
  constructor(
    @InjectRepository(StudyProcess)
    private studyProcessRepository: Repository<StudyProcess>
  ) {}
}
