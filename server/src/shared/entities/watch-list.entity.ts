import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { watch } from 'fs';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { User } from './user.entity';

@Entity({
  name: 'watch_lists',
})
export class WatchList {
  @ApiProperty()
  @PrimaryColumn()
  courseId: number;

  @ApiProperty()
  @PrimaryColumn()
  userId: number;

  @ApiProperty({ type: () => Course })
  @ManyToOne(() => Course, (course) => course.watchLists)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.watchLists)
  @JoinColumn({ name: 'userId' })
  user: User;

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

  static of(courseId: number, userId: number) {
    const watchList = new WatchList();
    watchList.courseId = courseId;
    watchList.userId = userId;
    watchList.course = { id: courseId } as any;
    watchList.user = { id: userId } as any;
    watchList.status = EntityStatus.ACTIVE;
    return watchList;
  }
}
