import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // the Next frontend calls this API from the browser in dev
  app.enableCors({ origin: true, allowedHeaders: ['Content-Type', 'X-Tenant', 'X-Mock-Scenario'] });
  const port = process.env.PORT ? Number(process.env.PORT) : 3001;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`[rf-api] mock API listening on :${port}`);
}
bootstrap();
