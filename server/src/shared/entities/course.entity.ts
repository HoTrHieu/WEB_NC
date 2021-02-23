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
import { IsNumber, IsString, Length } from 'class-validator';

@Entity({
  name: 'courses',
})
export class Course {
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
  subDescription: string;

  @ApiProperty()
  @Column('text')
  @IsString()
  description: string;

  @ApiProperty()
  @Column('float')
  @IsNumber()
  price: number;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  @IsString()
  avatarPath: string;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  @IsString()
  coverPath: string;

  @ApiResponseProperty()
  @Column('int')
  totalEnrollment: number;

  @ApiResponseProperty()
  @Column('float')
  star: number;

  @ApiResponseProperty()
  @Column('int')
  creatorId: number;

  @ApiResponseProperty()
  @Column('int')
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

  @ApiResponseProperty({ type: Category })
  @ManyToOne(() => Category, category => category.courses)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ApiResponseProperty({ type: User })
  @ManyToOne(() => User, user => user.createdCourses)
  @JoinColumn({ name: 'creatorId' })
  creator: User;

  @ApiResponseProperty({ type: Content })
  @OneToMany(() => Content, content => content.course)
  contents: Content[];

  @ApiResponseProperty({ type: WatchList })
  @OneToMany(() => WatchList, watchList => watchList.course)
  watchLists: WatchList[];

  @ApiResponseProperty({ type: Discount })
  @OneToMany(() => Discount, discount => discount.course)
  discounts: Discount[];

  @ApiResponseProperty({ type: Enrollment })
  @OneToMany(() => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];

  @ApiResponseProperty({ type: Review })
  @OneToMany(() => Review, review => review.course)
  reviews: Review[];
}
