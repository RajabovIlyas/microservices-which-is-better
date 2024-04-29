import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TaskModule } from './task.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule, {
    transport: Transport.NATS,
    options: {
      servers: ['nats://nats-broker:4222'],
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice Task is running`);
}
bootstrap();
