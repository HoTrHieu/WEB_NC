import { ElasticsearchService } from '@nestjs/elasticsearch';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { EsBulkItem } from './dto/es-bulk-item.dto';
export declare class EsHelperService {
    private esService;
    private readonly logger;
    constructor(esService: ElasticsearchService);
    upsert(index: string, id: string, doc: any): Promise<boolean>;
    updateStatus(index: string, id: string, status: EntityStatus): Promise<boolean>;
    bulk(items: EsBulkItem[]): Promise<boolean>;
}
