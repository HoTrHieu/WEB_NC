import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNumber, IsString, Length, Min } from 'class-validator';
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
import { CategoryTotalEnrollment } from './category-total-enrollment.entity';
import { Course } from './course.entity';

@Entity({
  name: 'categories',
})
export class Category {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar', { length: 255 })
  @IsString()
  @Length(1, 255)
  name: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  parentId: number;

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
  @OneToMany(() => Category, (category) => category.parent, { cascade: ['insert'] })
  children: Category[];

  @ApiResponseProperty({ type: () => CategoryTotalEnrollment })
  @OneToMany(() => CategoryTotalEnrollment, (cte) => cte.category)
  categoryTotalEnrollments: CategoryTotalEnrollment[];

  @ApiResponseProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.children)
  @JoinColumn({ name: 'parentId' })
  parent: Category;

  @ApiResponseProperty({ type: () => Course })
  @OneToMany(() => Course, (course) => course.category)
  courses: Course[];
}
