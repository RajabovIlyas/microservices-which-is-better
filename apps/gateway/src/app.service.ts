import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessageFromTask({ message }: { message: string }) {
    return { message: `message from task: ${message}` };
  }
}
