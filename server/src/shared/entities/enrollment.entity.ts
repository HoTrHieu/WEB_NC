import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { StudyProcess } from './study-process.entity';
import { User } from './user.entity';
import { Review } from './review.entity';

@Entity({
  name: 'enrollments',
})
export class Enrollment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: Course })
  @ManyToOne(() => Course, course => course.enrollments)
  course: Course;

  @ApiProperty({ type: User })
  @ManyToOne(() => User, user => user.enrollments)
  user: User;

  @ApiProperty({ type: StudyProcess, isArray: true })
  @OneToMany(() => StudyProcess, studyProcess => studyProcess.enrollment)
  studyProcesses: StudyProcess[];

  @ApiProperty({ type: Review, isArray: true })
  @OneToMany(() => Review, review => review.enrollment)
  reviews: Review[];

  @ApiProperty()
  @Column('int')
  amount: number;

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
}
