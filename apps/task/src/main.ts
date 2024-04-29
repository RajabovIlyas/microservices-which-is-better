import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TaskModule } from './task.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq-broker:5672'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice Task is running`);
}
bootstrap();
