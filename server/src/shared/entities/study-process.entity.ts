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
import { Content } from './content.entity';
import { Enrollment } from './enrollment.entity';

@Entity({
  name: 'study_processes',
})
export class StudyProcess {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: Enrollment })
  @ManyToOne(() => Enrollment, enrollment => enrollment.studyProcesses)
  enrollment: Enrollment;

  @ApiProperty({ type: Content })
  @ManyToOne(() => Content, content => content.studyProcesses)
  content: Content;

  @ApiProperty()
  @Column('int')
  duration: number;

  @ApiProperty()
  @Column('boolean')
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
  @Exclude()
  updatedDate: Date;

  @ApiProperty()
  @CreateDateColumn()
  createdDate: Date;
}
