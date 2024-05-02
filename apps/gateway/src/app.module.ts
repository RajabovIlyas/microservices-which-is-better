import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASK',
        transport: Transport.GRPC,
        options: {
          url: 'task-service:50052',
          package: 'task',
          protoPath: path.join(__dirname, '../../../proto/task.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
