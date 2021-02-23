import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
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
    private courseService: CourseService,
    private uploaderService: UploaderService,
  ) {}

  findOne(contentId: number) {
    return this.contentRepository.findOne({
      where: { contentId },
    });
  }

  async findMaxOrder(courseId: number) {
    const maxOrder = await this.contentRepository
      .createQueryBuilder()
      .where('courseId = :courseId', { courseId })
      .select('MAX(order)')
      .getRawOne();
    return maxOrder || 0;
  }

  async add(courseId: number, userId: number, content: Content) {
    await this.courseService.validateAndThrow(courseId, userId);
    content.duration = await getVideoDurationInSeconds(
      this.uploaderService.getFullFilePath(content.videoPath),
    );
    content.course = { id: courseId } as any;
    content.order = (await this.findMaxOrder(courseId)) + 1;
    return this.contentRepository.save(content);
  }

  async update(userId: number, contentId: number, content: Content) {
    await this.courseService.validateAndThrow(content.course.id, userId);
    const currContent = await this.findOne(contentId);
    if (!currContent) {
      throw new NotFoundException('Nội dung khóa học này không tồn tại');
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
        preview: content.preview
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
