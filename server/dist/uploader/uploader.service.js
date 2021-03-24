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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploaderService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs/promises");
const path = require("path");
const file_type_1 = require("../shared/enums/file-type");
const uuid_1 = require("uuid");
let UploaderService = class UploaderService {
    constructor() {
        this.configs = {
            [file_type_1.FileType.IMAGE]: {
                folder: 'upload/images',
                maxSize: 5 * 1024 * 1024,
                validMimeTypes: [
                    'image/gif',
                    'image/jpeg',
                    'image/png',
                    'image/svg+xml',
                    'image/webp'
                ]
            },
            [file_type_1.FileType.VIDEO]: {
                folder: 'upload/videos',
                maxSize: 500 * 1024 * 1024,
                validMimeTypes: [
                    'video/x-flv',
                    'video/mp4',
                    'video/3gpp'
                ]
            },
        };
        this.ASSETS_FOLDER_NAME = path.resolve(process.env.ROOT_PATH, 'assets');
    }
    getFullFilePath(filePath) {
        return path.join(this.ASSETS_FOLDER_NAME, filePath);
    }
    async upload(fileType, file) {
        const config = this.configs[fileType];
        if (!config) {
            throw new common_1.BadRequestException(`File type is not allowed, only accept: ${JSON.stringify(file_type_1.FileType)}`);
        }
        if (config.maxSize < file.size) {
            throw new common_1.BadRequestException(`File size is not allowed, limit: ${config.maxSize / 1024 / 1024}MB`);
        }
        if (!config.validMimeTypes.includes(file.mimetype)) {
            throw new common_1.BadRequestException(`MIME type is not allowed, only accept: ${JSON.stringify(config.validMimeTypes)}`);
        }
        const uuid = uuid_1.v4();
        const filename = `${uuid}${path.extname(file.originalname)}`;
        const publicPath = path.join(config.folder, filename);
        const filePath = path.join(this.ASSETS_FOLDER_NAME, publicPath);
        await fs.writeFile(filePath, file.buffer, 'binary');
        return publicPath.replace('\\', '/');
    }
};
UploaderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], UploaderService);
exports.UploaderService = UploaderService;
//# sourceMappingURL=uploader.service.js.map