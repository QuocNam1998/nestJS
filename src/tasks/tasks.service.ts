import { Injectable } from '@nestjs/common';
import { Task } from './tasks.interface';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: '1', title: 'Learn NestJS', status: 'OPEN' },
    { id: '2', title: 'Build CRUD API', status: 'OPEN' },
    { id: '3', title: 'Deploy to production', status: 'OPEN' },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(idToFind: string): Task | undefined {
    const target = this.tasks?.find((task) => idToFind === task.id);
    return target;
  }
}
