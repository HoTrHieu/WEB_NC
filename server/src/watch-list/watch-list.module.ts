import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/course/course.module';
import { WatchList } from 'src/shared/entities/watch-list.entity';
import { UserModule } from 'src/user/user.module';
import { WatchListController } from './watch-list.controller';
import { WatchListService } from './watch-list.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WatchList]),
    UserModule,
    CourseModule
  ],
  controllers: [WatchListController],
  providers: [WatchListService],
  exports: [WatchListService],
})
export class WatchListModule {}
