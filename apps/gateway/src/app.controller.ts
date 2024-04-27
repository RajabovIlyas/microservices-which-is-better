import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('TASK') private readonly clientTask: ClientProxy,
  ) {}

  @Get()
  async getHello() {
    const resultTask: { message: string } = await firstValueFrom(
      this.clientTask.send('getMessage', {}),
    );
    return this.appService.getMessageFromTask(resultTask);
  }
}
