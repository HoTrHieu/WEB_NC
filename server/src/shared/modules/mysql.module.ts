import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTotalEnrollment } from '../entities/category-total-enrollment.entity';
import { Category } from '../entities/category.entity';
import { Content } from '../entities/content.entity';
import { Course } from '../entities/course.entity';
import { Discount } from '../entities/discount.entity';
import { Enrollment } from '../entities/enrollment.entity';
import { Review } from '../entities/review.entity';
import { StudyProcess } from '../entities/study-process.entity';
import { User } from '../entities/user.entity';
import { WatchList } from '../entities/watch-list.entity';

export const mysqlModule = TypeOrmModule.forRootAsync({
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('settings.mysql.host'),
    port: config.get('settings.mysql.port'),
    username: config.get('settings.mysql.username'),
    password: config.get('settings.mysql.password'),
    database: config.get('settings.mysql.dbname'),
    entities: [
      Category,
      Content,
      Course,
      Discount,
      Enrollment,
      Review,
      StudyProcess,
      User,
      WatchList,
      CategoryTotalEnrollment
    ],
    synchronize: config.get('settings.mysql.sync'),
    logging: process.env.NODE_ENV === 'dev',
  }),
  inject: [ConfigService],
});
