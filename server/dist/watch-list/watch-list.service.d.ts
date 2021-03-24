import { WatchList } from 'src/shared/entities/watch-list.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { Repository } from 'typeorm';
export declare class WatchListService {
    private watchListRepository;
    constructor(watchListRepository: Repository<WatchList>);
    findByUserId(userId: number): Promise<WatchList[]>;
    findByCourseIdIn(userId: number, courseIds: number[]): Promise<WatchList[]>;
    updateStatus(courseId: number, userId: number, status: EntityStatus): Promise<boolean>;
}
