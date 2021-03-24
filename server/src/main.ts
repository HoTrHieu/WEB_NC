import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwagger } from './shared/modules/swagger.module';
import * as path from 'path';


async function bootstrap() {
  // setup env variables
  process.env.ROOT_PATH = path.resolve(__dirname, '..');
  process.env.TZ = 'Asia/Ho_Chi_Minh';

  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // configurations
  useSwagger(app);
  await app.listen(process.env.PORT || 2222);
}
bootstrap();
