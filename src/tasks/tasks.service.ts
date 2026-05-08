import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './tasks.interface';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [
    { id: '1', title: 'Learn NestJS', status: 'OPEN', description: '' },
    { id: '2', title: 'Build CRUD API', status: 'OPEN', description: '' },
    { id: '3', title: 'Deploy to production', status: 'OPEN', description: '' },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(idToFind: string): Task {
    const target = this.tasks?.find((task) => idToFind === task.id);
    if (!target) throw new NotFoundException();
    return target;
  }

  createTask(data: CreateTaskDto): Task {
    const task = { id: uuid(), ...data };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, body: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    Object.assign(task, body);
    return task;
  }

  removeTask(id: string) {
    const taskIdx = this.tasks.findIndex((task) => task.id === id);
    const notFound = -1 === taskIdx;
    if (notFound) throw new NotFoundException();
    this.tasks.splice(taskIdx, 1);
    return this.tasks;
  }
}
