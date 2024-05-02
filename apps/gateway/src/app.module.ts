import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'task',
            brokers: ['docker.kafka.io:9092'],
          },
          consumer: {
            groupId: `task-consumer`,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
