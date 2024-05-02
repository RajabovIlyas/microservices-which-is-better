import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('TASK') private readonly clientTask: ClientKafka) {}

  async onModuleInit() {
    this.clientTask.subscribeToResponseOf('get.message');

    await this.clientTask.connect();
  }

  async getMessageFromTask() {
    const { message }: { message: string } = await firstValueFrom(
      this.clientTask.send('get.message', {}),
    );
    return { message: `message from task: ${message}` };
  }
}
