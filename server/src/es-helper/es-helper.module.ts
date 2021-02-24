import { Module } from '@nestjs/common';
import { esModule } from 'src/shared/modules/elasticsearch.module';
import { EsHelperService } from './es-helper.service';

@Module({
  imports: [
    esModule
  ],
  providers: [EsHelperService],
  exports: [EsHelperService],
})
export class EsHelperModule {}

