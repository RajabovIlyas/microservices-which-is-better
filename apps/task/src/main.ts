import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TaskModule } from './task.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['docker.kafka.io:9092'],
      },
      consumer: {
        groupId: `task-consumer`,
      },
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice Task is running: docker.kafka.io:9092`);
}
bootstrap();
