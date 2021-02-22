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
import { Category } from './category.entity';
import { Content } from './content.entity';
import { User } from './user.entity';
import { WatchList } from './watch-list.entity';
import { Discount } from './discount.entity';
import { Enrollment } from './enrollment.entity';

@Entity({
  name: 'courses',
})
export class Course {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  title: string;

  @ApiProperty()
  @Column('text')
  subDescription: string;

  @ApiProperty()
  @Column('text')
  description: string;

  @ApiProperty()
  @Column('int')
  price: number;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  avatar: string;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  cover: string;

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

  @ApiProperty({ type: Category })
  @ManyToOne(() => Category, category => category.courses)
  category: Category;

  @ApiProperty({ type: User })
  @ManyToOne(() => User, user => user.createdCourses)
  creator: User;

  @ApiProperty({ type: Content, isArray: true })
  @OneToMany(() => Content, content => content.course)
  contents: Content[];

  @ApiProperty({ type: WatchList, isArray: true })
  @OneToMany(() => WatchList, watchList => watchList.course)
  watchLists: WatchList[];

  @ApiProperty({ type: Discount, isArray: true })
  @OneToMany(() => Discount, discount => discount.course)
  discounts: Discount[];

  @ApiProperty({ type: Enrollment, isArray: true })
  @OneToMany(() => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];
}
