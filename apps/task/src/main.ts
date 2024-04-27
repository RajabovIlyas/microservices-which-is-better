import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule, {
    transport: Transport.REDIS,
    options: {
      host: 'redis',
      port: 6379,
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice Task is running`);
}
bootstrap();
