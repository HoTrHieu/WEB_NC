import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { ContentTag } from '../entities/content-tag.entity';
import { Content } from '../entities/content.entity';
import { Tag } from '../entities/tag.entity';
import { AppUserCategory } from '../entities/user-profiler/app-user-category.entity';
import { AppUserContent } from '../entities/user-profiler/app-user-content.entity';
import { AppUserTag } from '../entities/user-profiler/app-user-tag.entity';
import { AppUser } from '../entities/user-profiler/app-user.entity';
import { User } from '../entities/user.entity';

export const mysqlModule = TypeOrmModule.forRootAsync({
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('settings.mysql.host'),
    port: config.get('settings.mysql.port'),
    username: config.get('settings.mysql.username'),
    password: config.get('settings.mysql.password'),
    database: config.get('settings.mysql.dbname'),
    entities: [
      AppUserContent,
      AppUserTag,
      AppUserCategory,
      ContentTag,
      User,
      Category,
      Content,
      Tag,
      AppUser
    ],
    synchronize: config.get('settings.mysql.sync'),
    logging: process.env.NODE_ENV === 'dev',
  }),
  inject: [ConfigService],
});
