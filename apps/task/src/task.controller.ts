import { Controller } from '@nestjs/common';
import { TaskService } from './task.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @MessagePattern('getMessage')
  getMessage() {
    return this.taskService.getMessage();
  }
}
