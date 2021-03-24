import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Content } from './content.entity';
import { Enrollment } from './enrollment.entity';

@Entity({
  name: 'study_processes',
})
export class StudyProcess {
  @ApiProperty()
  @PrimaryColumn()
  courseId: number;

  @ApiProperty()
  @PrimaryColumn()
  userId: number;

  @ApiProperty()
  @PrimaryColumn()
  contentId: number;

  @ApiProperty()
  @Column('int')
  duration: number;

  @ApiProperty()
  @Column('boolean', { default: false })
  done: boolean;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: EntityStatus,
    default: EntityStatus.ACTIVE,
  })
  status: EntityStatus;

  @ApiProperty()
  @UpdateDateColumn()
  updatedDate: Date;

  @ApiProperty()
  @CreateDateColumn()
  createdDate: Date;

  @ApiProperty({ type: () => Enrollment })
  @ManyToOne(() => Enrollment, (enrollment) => enrollment.studyProcesses)
  @JoinColumn([
    { name: 'courseId', referencedColumnName: 'courseId' },
    { name: 'userId', referencedColumnName: 'userId' },
  ])
  enrollment: Enrollment;

  @ApiProperty({ type: () => Content })
  @ManyToOne(() => Content, (content) => content.studyProcesses)
  @JoinColumn({ name: 'contentId' })
  content: Content;

  static of(
    courseId: number,
    userId: number,
    contentId: number,
    duration: number,
    done: boolean = false,
  ) {
    const studyProcess = new StudyProcess();
    studyProcess.duration = duration;
    studyProcess.done = done;
    studyProcess.courseId = courseId;
    studyProcess.userId = userId;
    studyProcess.contentId = contentId;
    return studyProcess;
  }
}
