import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTotalEnrollmentModule } from 'src/category-total-enrollment/category-total-enrollment.module';
import { Category } from 'src/shared/entities/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    CacheModule.register(),
    CategoryTotalEnrollmentModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
