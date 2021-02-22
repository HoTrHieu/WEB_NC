import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchList } from 'src/shared/entities/watch-list.entity';
import { WatchListController } from './watch-list.controller';
import { WatchListService } from './watch-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([WatchList])],
  controllers: [WatchListController],
  providers: [WatchListService],
  exports: [WatchListService],
})
export class WatchListModule {}
