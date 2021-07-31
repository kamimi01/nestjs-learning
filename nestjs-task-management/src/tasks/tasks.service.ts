import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
// v4()でも呼べるが、意味がわかりづらいので、asで別名をつける
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // publicにすると他からも値が変更可能になってしまうため、値を変更するためのメソッドを用意してそこから値を変更させる
  private tasks: Task[] = [];

  // デフォルトでpublicになるので、アクセス修飾子は付けなくても良い
  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    // 仮の配列を定義する
    let tasks = this.getAllTasks();

    // statusに関しての処理
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    // searchに関しての処理
    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }

        return false;
      });
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;

    return task;
  }
}
