import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { StudyProcess } from './study-process.entity';
import { User } from './user.entity';

@Entity({
  name: 'enrollments',
})
export class Enrollment {
  @ApiProperty()
  @PrimaryColumn()
  courseId: number;

  @ApiProperty()
  @PrimaryColumn()
  userId: number;

  @ApiProperty()
  @Column('int')
  amount: number;

  @ApiProperty({ type: () => Course })
  @ManyToOne(() => Course, (course) => course.enrollments)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.enrollments)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ApiProperty({ type: () => StudyProcess, isArray: true })
  @OneToMany(() => StudyProcess, (studyProcess) => studyProcess.enrollment)
  studyProcesses: StudyProcess[];

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: EntityStatus,
    default: EntityStatus.ACTIVE,
  })
  status: EntityStatus;

  @ApiProperty()
  @UpdateDateColumn()
  @Exclude()
  updatedDate: Date;

  @ApiProperty()
  @CreateDateColumn()
  createdDate: Date;

  static of(courseId: number, userId: number) {
    const enrollment = new Enrollment();
    enrollment.courseId = courseId;
    enrollment.userId = userId;
    enrollment.course = { id: courseId } as any;
    enrollment.user = { id: userId } as any;
    enrollment.amount = 0;
    return enrollment;
  }
}
