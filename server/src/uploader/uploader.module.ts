import { Module } from '@nestjs/common';
import { UploaderController } from './uploader.controller';
import { UploaderService } from './uploader.service';

@Module({
  imports: [],
  controllers: [UploaderController],
  providers: [UploaderService],
  exports: [UploaderService],
})
export class UploaderModule {}
