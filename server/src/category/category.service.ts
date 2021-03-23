import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/shared/entities/category.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { IsNull, Repository } from 'typeorm';
import * as moment from 'moment';
import { TopCategoryOfWeek } from './dto/top-category-of-week.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository.find({
      where: { status: EntityStatus.ACTIVE, parentId: IsNull() },
      relations: ['children'],
    });
  }

  findOne(categoryId: number) {
    return this.categoryRepository.findOne(categoryId);
  }

  async findParentId(categoryId: number) {
    const {
      parentId,
    } = await this.categoryRepository
      .createQueryBuilder()
      .where('id = :categoryId', { categoryId })
      .select('parentId')
      .getRawOne();
    return parentId;
  }

  async findTopOfWeek(limit: number = 10) {
    const categories = await this.categoryRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.categoryTotalEnrollments', 'cte')
      .where(
        'cte.categoryId IS NULL or (cte.year = :year AND cte.week = :week)',
        {
          week: moment().week(),
          year: moment().year(),
        },
      )
      .orderBy('cte.totalEnrollment', 'DESC')
      .addOrderBy('c.updatedDate', 'DESC')
      .limit(limit)
      .getMany();

    return categories.map((category) => {
      let totalEnrollment = 0;
      const cte = category.categoryTotalEnrollments[0];
      if (!!cte) {
        totalEnrollment = cte.totalEnrollment;
      }
      delete category.categoryTotalEnrollments;
      return TopCategoryOfWeek.of(totalEnrollment, category);
    });
  }

  findOneByName(name: string) {
    return this.categoryRepository.findOne({ name });
  }

  async addCategory(name: string) {
    let category = await this.findOneByName(name);
    if (!category) {
      category = this.categoryRepository.create({ name, slug: uuidv4() });
    }
    category.status = EntityStatus.ACTIVE;
    return this.categoryRepository.save(category);
  }

  async updateStatus(id: number, status: EntityStatus) {
    const result = await this.categoryRepository.update(id, {
      status,
    });
    return result.affected > 0;
  }
}
