import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { WatchList } from 'src/shared/entities/watch-list.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Repository } from 'typeorm';

@Injectable()
export class WatchListService {
  constructor(
    @InjectRepository(WatchList)
    private watchListRepository: Repository<WatchList>,
    private courseService: CourseService,
  ) {}

  paginate(userId: number, request: PagingRequest) {
    return PagingUtil.paginate(this.watchListRepository, request, {
      where: { userId },
    });
  }

  async updateStatus(courseId: number, userId: number, status: EntityStatus) {
    if (!this.courseService.exists(courseId)) {
      throw new BadRequestException('Khóa học không tồn tại');
    }
    const qb = this.watchListRepository
      .createQueryBuilder()
      .insert()
      .into(WatchList)
      .values(WatchList.of(courseId, userId))
      .setParameter('status', status);
    qb.expressionMap.onUpdate = { columns: 'status = :status' };
    await qb.execute();
    return true;
  }
}
