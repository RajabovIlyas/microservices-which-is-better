import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TaskModule } from './task.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule, {
    transport: Transport.TCP,
    options: {
      host: 'task',
      port: 3001,
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice Task is running`);
}
bootstrap();
