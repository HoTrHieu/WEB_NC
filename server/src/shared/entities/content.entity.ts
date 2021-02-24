import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsBoolean, IsInt, IsString, Length } from 'class-validator';
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

@Entity({
  name: 'contents',
})
export class Content {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  @IsString()
  @Length(1, 1000)
  title: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  description: string;

  @ApiProperty()
  @Column('int')
  @IsInt()
  order: number;

  @ApiProperty()
  @Column('boolean')
  @IsBoolean()
  preview: boolean;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  @IsString()
  videoPath: string;

  @ApiResponseProperty()
  @Column('int')
  duration: number;

  @ApiResponseProperty()
  @Column({
    type: 'enum',
    enum: EntityStatus,
    default: EntityStatus.ACTIVE,
  })
  status: EntityStatus;

  @ApiResponseProperty()
  @UpdateDateColumn()
  @Exclude()
  updatedDate: Date;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdDate: Date;

  @ApiResponseProperty({ type: Course })
  @ManyToOne(() => Course, (course) => course.contents)
  course: Course;

  @ApiResponseProperty({ type: StudyProcess })
  @OneToMany(() => StudyProcess, (studyProcess) => studyProcess.content)
  studyProcesses: StudyProcess[];
}
