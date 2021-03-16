import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Category } from './category.entity';
import { Content } from './content.entity';
import { User } from './user.entity';
import { WatchList } from './watch-list.entity';
import { Discount } from './discount.entity';
import { Enrollment } from './enrollment.entity';
import { Review } from './review.entity';
import { IsNumber, IsString, Length, Min } from 'class-validator';
import { HighlightCourse } from './highlight-course.entity';

@Entity({
  name: 'courses',
})
export class Course {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar', { length: 255, unique: true })
  @IsString()
  @Length(1, 255)
  title: string;

  @ApiProperty()
  @Column('varchar', { length: 255, unique: true })
  @IsString()
  @Length(1, 255)
  slug: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  subDescription: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  description: string;

  @ApiProperty()
  @Column('float', { default: 0 })
  @IsNumber()
  price: number;

  @ApiProperty()
  @Column('varchar', { length: 1000, default: '' })
  @IsString()
  avatarPath: string;

  @ApiProperty()
  @Column('varchar', { length: 1000, default: '' })
  @IsString()
  coverPath: string;

  @ApiResponseProperty()
  @Column('int', { default: 0 })
  totalEnrollment: number;

  @ApiResponseProperty()
  @Column('float', { default: 0 })
  avgStar: number;

  @ApiResponseProperty()
  @Column('int', { default: 0 })
  totalView: number;

  @ApiResponseProperty()
  @Column('int')
  creatorId: number;

  @ApiProperty()
  @Column('int')
  @IsNumber()
  @Min(1)
  categoryId: number;

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

  @ApiResponseProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.courses)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ApiResponseProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.createdCourses)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @ApiResponseProperty({ type: () => Content })
  @OneToMany(() => Content, (content) => content.course)
  contents: Content[];

  @ApiResponseProperty({ type: () => WatchList })
  @OneToMany(() => WatchList, (watchList) => watchList.course)
  watchLists: WatchList[];

  @ApiResponseProperty({ type: () => Discount })
  @OneToMany(() => Discount, (discount) => discount.course)
  discounts: Discount[];

  @ApiResponseProperty({ type: () => Enrollment })
  @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
  enrollments: Enrollment[];

  @ApiResponseProperty({ type: () => Review })
  @OneToMany(() => Review, (review) => review.course)
  reviews: Review[];

  @ApiResponseProperty({ type: () => HighlightCourse })
  @OneToMany(() => HighlightCourse, (highlight) => highlight.course)
  highlights: HighlightCourse[];
}
