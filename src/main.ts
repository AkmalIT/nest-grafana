import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { collectDefaultMetrics, register } from 'prom-client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .getHttpAdapter()
    .getInstance()
    .get('/metrics', async (req, res) => {
      res.set('Content-Type', register.contentType);
      res.end(await register.metrics());
    });

  await app.listen(3001);
}
bootstrap();
