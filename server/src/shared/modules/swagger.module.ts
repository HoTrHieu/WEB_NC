import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function createDocument(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('[Web NC] Fademy')
    .setDescription('[Web NC] Fademy - API Document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

export function useSwagger(app: INestApplication) {
  createDocument(app);
}
