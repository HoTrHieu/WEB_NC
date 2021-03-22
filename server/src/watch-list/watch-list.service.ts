import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WatchList } from 'src/shared/entities/watch-list.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { In, Repository } from 'typeorm';

@Injectable()
export class WatchListService {
  constructor(
    @InjectRepository(WatchList)
    private watchListRepository: Repository<WatchList>
  ) {}

  findByUserId(userId: number) {
    return this.watchListRepository.find({
      userId,
      status: EntityStatus.ACTIVE
    });
  }

  findByCourseIdIn(userId: number, courseIds: number[]) {
    return this.watchListRepository.find({
      userId,
      courseId: In(courseIds),
      status: EntityStatus.ACTIVE
    });
  }

  async updateStatus(courseId: number, userId: number, status: EntityStatus) {
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
