import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getMessage() {
    return { message: 'Hello World!' };
  }
}
