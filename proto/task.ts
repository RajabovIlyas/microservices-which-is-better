import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace task {
  export interface GetTaskRequest {
    id?: string;
  }
  export interface Task {
    message?: string;
  }
  export interface TaskService {
    getTask(
      data: GetTaskRequest,
      metadata?: Metadata,
      ...rest: any[]
    ): Observable<Task>;
  }
}
