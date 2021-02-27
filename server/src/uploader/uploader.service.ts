import { BadRequestException, Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { FileType } from 'src/shared/enums/file-type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploaderService {
  private ASSETS_FOLDER_NAME;
  private configs = {
    [FileType.IMAGE]: {
      folder: 'images',
      maxSize:  5 * 1024 * 1024, // 5MB
      validMimeTypes: [
        'image/gif',
        'image/jpeg',
        'image/png',
        'image/svg+xml',
        'image/webp'
      ]
    },
    [FileType.VIDEO]: {
      folder: 'videos',
      maxSize:  500 * 1024 * 1024, // 500MB
      validMimeTypes: [
        'video/webm',
        'video/ogg'
      ]
    },
  };

  constructor() {
    this.ASSETS_FOLDER_NAME = path.resolve(process.env.ROOT_PATH, 'assets');
  }

  getFullFilePath(filePath) {
    return path.join(this.ASSETS_FOLDER_NAME, filePath);
  }

  async upload(fileType: FileType, file: Express.Multer.File) {
    const config = this.configs[fileType];
    if (!config) {
      throw new BadRequestException(`File type is not allowed, only accept: ${JSON.stringify(FileType)}`);
    }
    if (config.maxSize < file.size) {
      throw new BadRequestException(`File size is not allowed, limit: ${config.maxSize / 1024 / 1024}MB`)
    }
    if (!config.validMimeTypes.includes(file.mimetype)) {
      throw new BadRequestException(`MIME type is not allowed, only accept: ${JSON.stringify(config.validMimeTypes)}`);
    }
    const uuid = uuidv4();
    const filename = `${uuid}${path.extname(file.originalname)}`;
    const publicPath = path.join(config.folder, filename);
    const filePath = path.join(this.ASSETS_FOLDER_NAME, publicPath);
    await fs.writeFile(filePath, file.buffer, 'binary');
    return publicPath.replace('\\', '/');
  }
}
