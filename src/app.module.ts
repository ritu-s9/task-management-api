import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalHttpExceptionFilter } from './exceptions/filters/global-http-exception.filter';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalHttpExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
