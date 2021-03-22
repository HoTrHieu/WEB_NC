import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/shared/entities/content.entity';
import { Repository } from 'typeorm';
import { getVideoDurationInSeconds } from 'get-video-duration';
import { UploaderService } from 'src/uploader/uploader.service';
import { EntityStatus } from 'src/shared/enums/entity-status';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
    private uploaderService: UploaderService,
  ) {}

  findOne(contentId: number) {
    return this.contentRepository.findOne({
      where: { contentId },
    });
  }

  async findMaxOrder(courseId: number) {
    const { maxOrder } = await this.contentRepository
      .createQueryBuilder()
      .where('courseId = :courseId', { courseId })
      .select('MAX(order)', 'maxOrder')
      .getRawOne();
    return maxOrder || 0;
  }

  async add(courseId: number, content: Content) {
    content.duration = await getVideoDurationInSeconds(
      this.uploaderService.getFullFilePath(content.videoPath),
    );
    content.course = { id: courseId } as any;
    content.order = (await this.findMaxOrder(courseId)) + 1;
    return this.contentRepository.save(content);
  }

  async update(contentId: number, content: Content) {
    const currContent = await this.findOne(contentId);
    if (!currContent) {
      throw new NotFoundException("This content is not exists");
    }
    if (content.videoPath !== currContent.videoPath) {
      content.duration = await getVideoDurationInSeconds(
        this.uploaderService.getFullFilePath(content.videoPath),
      );
    } else {
      content.duration = currContent.duration;
      content.videoPath = currContent.videoPath;
    }
    const result = await this.contentRepository.update(
      {
        id: contentId,
      },
      {
        title: content.title,
        description: content.description,
        videoPath: content.videoPath,
        duration: content.duration,
        preview: content.preview,
      },
    );
    return result.affected > 0;
  }

  async updateStatus(contentId: number, status: EntityStatus) {
    const result = await this.contentRepository.update(
      { id: contentId },
      {
        status,
      },
    );
    return result.affected > 0;
  }
}
