import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OtpService } from './otp.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        ttl: config.get('otp.ttl')
      }),
      imports: [ConfigService]
    })
  ],
  providers: [OtpService],
  exports: [OtpService],
})
export class OtpModule {}
