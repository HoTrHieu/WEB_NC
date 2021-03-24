import { ApiProperty } from '@nestjs/swagger';
import * as moment from 'moment';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Category } from './category.entity';

@Entity({
  name: 'category_total_enrollments',
})
export class CategoryTotalEnrollment {
  @ApiProperty()
  @PrimaryColumn()
  categoryId: number;

  @ApiProperty()
  @PrimaryColumn('int')
  week: number;

  @ApiProperty()
  @PrimaryColumn('int')
  year: number;

  @ApiProperty()
  @Column('int')
  totalEnrollment: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: EntityStatus,
    default: EntityStatus.ACTIVE,
  })
  status: EntityStatus;

  @ApiProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.categoryTotalEnrollments)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  static of(categoryId: number, totalEnrollment: number = 1) {
    const entity = new CategoryTotalEnrollment();
    entity.categoryId = categoryId;
    entity.totalEnrollment = totalEnrollment;
    entity.week = moment().week();
    entity.year = moment().year();
    return entity;
  }
}
