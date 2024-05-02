import { Controller, Logger } from '@nestjs/common';
import { TaskService } from './task.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @MessagePattern('get.message')
  getMessage() {
    return this.taskService.getMessage();
  }

  @EventPattern('get.message.reply')
  logReply(message): void {
    Logger.log(message);
  }
}
