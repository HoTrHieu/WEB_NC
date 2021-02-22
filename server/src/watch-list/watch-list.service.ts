import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  ) {}

  paginate(userId: number, request: PagingRequest) {
    return PagingUtil.paginate(this.watchListRepository, request, {
      where: { userId }
    });
  }

  async updateStatus(courseId: number, userId: number, status: EntityStatus) {
    const qb = this.watchListRepository
      .createQueryBuilder()
      .insert()
      .into(WatchList)
      .values(WatchList.of(courseId, userId))
      .setParameter('status', status)
    qb.expressionMap.onUpdate = { columns: 'status = :status' };
    return await qb.execute();
  }
}
