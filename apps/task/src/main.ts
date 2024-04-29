import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { TaskModule } from './task.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(TaskModule, {
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://mqtt-broker:1883',
    },
  });
  await app.listen();
  Logger.log(`🚀 Microservice Task is running`);
}
bootstrap();
