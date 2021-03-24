/// <reference types="multer" />
import { FileType } from 'src/shared/enums/file-type';
export declare class UploaderService {
    private ASSETS_FOLDER_NAME;
    private configs;
    constructor();
    getFullFilePath(filePath: any): string;
    upload(fileType: FileType, file: Express.Multer.File): Promise<string>;
}
