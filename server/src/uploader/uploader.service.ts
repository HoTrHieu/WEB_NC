import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { FileType } from 'src/shared/enums/file-type';
import { uuid as uuidv4 } from 'uuidv4';

@Injectable()
export class UploaderService {
  private ASSETS_FOLDER_NAME = 'assets';
  public static Folder = {
    [FileType.IMAGE]: 'image',
    [FileType.VIDEO]: 'video',
  };

  getFullFilePath(filePath) {
    return path.join(this.ASSETS_FOLDER_NAME, filePath);
  }

  async upload(folder: string, file: Express.Multer.File) {
    const uuid = uuidv4();
    const filename = `${uuid}${path.extname(file.filename)}`;
    const publicPath = path.join(folder, filename);
    const filePath = path.join(this.ASSETS_FOLDER_NAME, publicPath);
    await fs.copyFile(file.path, filePath);
    return publicPath;
  }
}
