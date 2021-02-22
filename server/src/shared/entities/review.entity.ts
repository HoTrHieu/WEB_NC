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
import { Course } from './course.entity';
import { User } from './user.entity';

@Entity({
  name: 'reviews',
})
export class Review {

  @ApiProperty()
  @PrimaryColumn()
  userId: number;

  @ApiProperty()
  @PrimaryColumn()
  courseId: number;

  @ApiProperty({ type: User })
  @ManyToOne(() => User, user => user.reviews)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ApiProperty({ type: Course })
  @ManyToOne(() => Course, course => course.reviews)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty()
  @Column('int')
  star: number;

  @ApiProperty()
  @Column('text')
  feedback: string;

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

  static of(courseId: number, userId: number, star: number, feedback: string) {
    const review = new Review();
    review.courseId = courseId;
    review.userId = userId;
    review.user = { id: userId } as any;
    review.course = { id: courseId } as any;
    review.star = star;
    review.feedback = feedback;
    return review;
  }
}
