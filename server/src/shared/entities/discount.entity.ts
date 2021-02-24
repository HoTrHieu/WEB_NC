import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityStatus } from '../enums/entity-status';
import { Course } from './course.entity';

@Entity({
  name: 'discounts',
})
export class Discount {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column('int')
  amount: number;

  @ApiProperty({ type: () => Course })
  @OneToMany(() => Course, (course) => course.discounts)
  course: Course;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: EntityStatus,
    default: EntityStatus.ACTIVE,
  })
  @Index('discount_status_idx')
  status: EntityStatus;

  @ApiProperty()
  @UpdateDateColumn()
  @Exclude()
  updatedDate: Date;

  @ApiProperty()
  @CreateDateColumn()
  createdDate: Date;
}
