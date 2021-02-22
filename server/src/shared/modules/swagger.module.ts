import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ContentSuggestModule } from 'src/open-api/content-suggest/content-suggest.module';
import { AppUserModule } from 'src/open-api/user-profiler/app-user/app-user.module';
import { UserProfilerModule } from 'src/open-api/user-profiler/user-profiler.module';

function createInternalDocument(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Anti-Plagiarism CMS')
    .setDescription('Anti-Plagiarism CMS API Document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

function createOpenDocument(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('[Open API] Anti-Plagiarism CMS')
    .setDescription('Anti-Plagiarism CMS Open API Document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [AppUserModule, UserProfilerModule, ContentSuggestModule]
  });
  SwaggerModule.setup('open/swagger', app, document);
}

export function useSwagger(app: INestApplication) {
  createInternalDocument(app);
  createOpenDocument(app);
}
