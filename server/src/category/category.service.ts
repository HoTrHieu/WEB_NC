import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/shared/entities/category.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { IsNull, Repository } from 'typeorm';
import * as moment from 'moment';
import { TopCategoryOfWeek } from './dto/top-category-of-week.dto';
import { v4 as uuidv4 } from 'uuid';
import { SearchCategoryRequest } from './dto/search-category-request.dto';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Course } from 'src/shared/entities/course.entity';
import { CategoryResponse } from './dto/category-response.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async search(request: SearchCategoryRequest) {
    const conditions: any = {};
    if (!request.all) {
      conditions.status = EntityStatus.ACTIVE;
    }
    const result = await PagingUtil.paginate(this.categoryRepository, request, {
      where: conditions,
      relations: ['parent'],
    });
    return {
      ...result,
      items: await this.decor(result.items),
    };
  }

  async decor(categories: Category[]): Promise<CategoryResponse[]> {
    const categoryIds = categories.filter((c) => !!c.parent).map((c) => c.id);
    const nonEmptyCategories = await this.categoryRepository.manager
      .createQueryBuilder(Course, 'course')
      .where('course.categoryId IN (:...categoryIds)', { categoryIds })
      .select('categoryId')
      .distinct()
      .getRawMany();
    const nonEmptyMap = nonEmptyCategories.reduce((map: any, rs) => {
      map[rs.categoryId] = true;
      return map;
    }, {});
    return categories.map((category) => ({
      ...category,
      isEmpty: !!category.parent && !nonEmptyMap[category.id],
    }));
  }

  findAll() {
    return this.categoryRepository.find({
      where: { status: EntityStatus.ACTIVE, parentId: IsNull() },
      relations: ['children'],
    });
  }

  findOne(categoryId: number) {
    return this.categoryRepository.findOne(categoryId);
  }

  async checkName(name: string) {
    return !!(await this.categoryRepository.findOne({ name }));
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

  async addCategory(request: Category) {
    let category = await this.findOneByName(request.name);
    if (!category) {
      category = this.categoryRepository.create({
        ...request,
        slug: uuidv4()
      });
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

  async update(id: number, category: Category) {
    category.slug = uuidv4();
    const result = await this.categoryRepository.update(id, {
      slug: category.slug,
      name: category.name,
      parentId: category.parentId,
    });
    return result.affected > 0;
  }
}
