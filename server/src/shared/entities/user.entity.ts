import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../enums/user-role';
import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';
import { WatchList } from './watch-list.entity';
import { Enrollment } from './enrollment.entity';
import { Review } from './review.entity';

@Entity({
  name: 'users',
})
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar', { length: 255 })
  @Index('users_username_unique_idx', { unique: true })
  username: string;

  @ApiProperty()
  @Column('varchar', { length: 255 })
  @Index('users_email_unique_idx', { unique: true })
  email: string;

  @ApiProperty()
  @Column('varchar', { length: 255 })
  firstName: string;

  @ApiProperty()
  @Column('varchar', { length: 255 })
  lastName: string;

  @Column('varchar', { length: 255 })
  @Exclude()
  passwordHash: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.NORMAL,
  })
  role: UserRole;

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

  @ApiProperty({ type: Course, isArray: true })
  @OneToMany(() => Course, course => course.creator)
  createdCourses: Course[];

  @ApiProperty({ type: WatchList, isArray: true })
  @OneToMany(() => WatchList, watchList => watchList.user)
  watchLists: WatchList[];

  @ApiProperty({ type: Enrollment, isArray: true })
  @OneToMany(() => Enrollment, enrollment => enrollment.user)
  enrollments: Enrollment[];

  @ApiProperty({ type: Review, isArray: true })
  @OneToMany(() => Review, review => review.user)
  reviews: Review[];
}
