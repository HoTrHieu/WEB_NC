import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';
import { StudyProcess } from 'src/shared/entities/study-process.entity';
import { StudyProcessController } from './study-process.controller';
import { StudyProcessService } from './study-process.service';
import { ContentModule } from 'src/content/content.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudyProcess]),
    EnrollmentModule,
    ContentModule
  ],
  controllers: [StudyProcessController],
  providers: [StudyProcessService],
  exports: [StudyProcessService],
})
export class StudyProcessModule {}