import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";
import * as moment from "moment";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { EntityStatus } from "../enums/entity-status";
import { Course } from "./course.entity";

@Entity({
  name: 'highlight_courses'
})
export class HighlightCourse {
  @ApiProperty()
  @PrimaryColumn()
  courseId: number;

  @ApiProperty()
  @PrimaryColumn('int')
  week: number;

  @ApiProperty()
  @PrimaryColumn('int')
  year: number;

  @ApiResponseProperty()
  @Column('int', { default: 0 })
  score: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: EntityStatus,
    default: EntityStatus.ACTIVE,
  })
  status: EntityStatus;

  @ApiProperty({ type: () => Course })
  @ManyToOne(() => Course, (course) => course.highlights)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  static of(courseId: number, score: number = 0) {
    const entity = new HighlightCourse();
    entity.courseId = courseId;
    entity.score = score;
    entity.week = moment().week();
    entity.year = moment().year();
    return entity;
  }
}