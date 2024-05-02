import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTask() {
    return { message: 'Hello World!' };
  }
}
