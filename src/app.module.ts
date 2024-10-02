import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from 'nestjs-prometheus';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PrometheusModule.register(), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
