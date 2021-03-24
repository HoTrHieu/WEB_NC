import { Content } from 'src/shared/entities/content.entity';
import { Repository } from 'typeorm';
import { UploaderService } from 'src/uploader/uploader.service';
import { EntityStatus } from 'src/shared/enums/entity-status';
export declare class ContentService {
    private contentRepository;
    private uploaderService;
    constructor(contentRepository: Repository<Content>, uploaderService: UploaderService);
    findOne(contentId: number): Promise<Content>;
    findMaxOrder(courseId: number): Promise<any>;
    save(...contents: Content[]): Promise<Content[]>;
    add(courseId: number, content: Content): Promise<Content>;
    update(contentId: number, content: Content): Promise<boolean>;
    updateStatus(contentId: number, status: EntityStatus): Promise<boolean>;
}
