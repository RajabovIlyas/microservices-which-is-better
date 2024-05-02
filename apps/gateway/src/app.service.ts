import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { task } from '../../../proto/task';
import TaskService = task.TaskService;

@Injectable()
export class AppService implements OnModuleInit {
  private taskService: TaskService;
  constructor(@Inject('TASK') private readonly clientTask: ClientGrpc) {}

  onModuleInit() {
    this.taskService = this.clientTask.getService<TaskService>('TaskService');
  }
  async getMessageFromTask() {
    return this.taskService.getTask({});
  }
}
