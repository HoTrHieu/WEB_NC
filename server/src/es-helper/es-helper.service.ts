import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { ArrayUtil } from 'src/shared/utils/array.util';
import { EsBulkItem } from './dto/es-bulk-item.dto';

@Injectable()
export class EsHelperService {
  private readonly logger = new Logger(EsHelperService.name);

  constructor(private esService: ElasticsearchService) {}

  async upsert(index: string, id: string, doc: any) {
    const result = await this.esService.update({
      index,
      id,
      refresh: true,
      body: {
        doc,
        doc_as_upsert: true,
      },
    });
    return (
      result.statusCode === HttpStatus.OK ||
      result.statusCode === HttpStatus.CREATED
    );
  }

  updateStatus(index: string, id: string, status: EntityStatus) {
    return this.upsert(index, id, { status });
  }

  async bulk(items: EsBulkItem[]) {
    const bulkItems = ArrayUtil.flatMap(items.map((item) => item.toBulkItem()));
    if (bulkItems.length > 0) {
      const result = await this.esService.bulk({
        refresh: true,
        body: bulkItems,
      });
      if (result.body.errors) {
        this.logger.error(result.body.errors);
        return false;
      }
    }
    return true;
  }
}
