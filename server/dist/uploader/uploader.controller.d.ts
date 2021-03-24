/// <reference types="multer" />
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { FileType } from 'src/shared/enums/file-type';
import { UploaderService } from './uploader.service';
export declare class UploaderController {
    private uploaderService;
    constructor(uploaderService: UploaderService);
    upload(fileType: FileType, state: string, file: Express.Multer.File): Promise<StdResponse<{
        filePath: string;
        state: string;
    }>>;
}
