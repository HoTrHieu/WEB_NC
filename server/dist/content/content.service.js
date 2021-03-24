"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const content_entity_1 = require("../shared/entities/content.entity");
const typeorm_2 = require("typeorm");
const get_video_duration_1 = require("get-video-duration");
const uploader_service_1 = require("../uploader/uploader.service");
const entity_status_1 = require("../shared/enums/entity-status");
let ContentService = class ContentService {
    constructor(contentRepository, uploaderService) {
        this.contentRepository = contentRepository;
        this.uploaderService = uploaderService;
    }
    findOne(contentId) {
        return this.contentRepository.findOne({
            where: { id: contentId },
        });
    }
    async findMaxOrder(courseId) {
        const { maxOrder } = await this.contentRepository
            .createQueryBuilder()
            .where('courseId = :courseId', { courseId })
            .select('MAX(order)', 'maxOrder')
            .getRawOne();
        return maxOrder || 0;
    }
    async save(...contents) {
        for (const content of contents) {
            content.duration = await get_video_duration_1.getVideoDurationInSeconds(this.uploaderService.getFullFilePath(content.videoPath));
        }
        return this.contentRepository.save(contents);
    }
    async add(courseId, content) {
        content.duration = await get_video_duration_1.getVideoDurationInSeconds(this.uploaderService.getFullFilePath(content.videoPath));
        content.course = { id: courseId };
        content.order = (await this.findMaxOrder(courseId)) + 1;
        return this.contentRepository.save(content);
    }
    async update(contentId, content) {
        const currContent = await this.findOne(contentId);
        if (!currContent) {
            throw new common_1.NotFoundException("This content is not exists");
        }
        if (content.videoPath !== currContent.videoPath) {
            content.duration = await get_video_duration_1.getVideoDurationInSeconds(this.uploaderService.getFullFilePath(content.videoPath));
        }
        else {
            content.duration = currContent.duration;
            content.videoPath = currContent.videoPath;
        }
        const result = await this.contentRepository.update({
            id: contentId,
        }, {
            title: content.title,
            description: content.description,
            videoPath: content.videoPath,
            duration: content.duration,
            preview: content.preview,
        });
        return result.affected > 0;
    }
    async updateStatus(contentId, status) {
        const result = await this.contentRepository.update({ id: contentId }, {
            status,
        });
        return result.affected > 0;
    }
};
ContentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(content_entity_1.Content)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        uploader_service_1.UploaderService])
], ContentService);
exports.ContentService = ContentService;
//# sourceMappingURL=content.service.js.map