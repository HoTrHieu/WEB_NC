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
import { Course } from './course.entity';

@Entity({
  name: 'categories',
})
export class Category {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('varchar', { length: 1000 })
  name: string;

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

  @ApiProperty({ type: Category, isArray: true })
  @OneToMany(() => Category, (category) => category.parent)
  children: Category[];

  @ApiProperty({ type: Category })
  @ManyToOne(() => Category, (category) => category.children)
  parent: Category;

  @ApiProperty({ type: Course, isArray: true })
  @OneToMany(() => Course, (course) => course.category)
  courses: Course[];
}
