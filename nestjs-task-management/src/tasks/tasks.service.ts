import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
// v4()でも呼べるが、意味がわかりづらいので、asで別名をつける
// データベースにデータを置くよう修正するのでuuidは不要
// import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}
  // publicにすると他からも値が変更可能になってしまうため、値を変更するためのメソッドを用意してそこから値を変更させる
  // private tasks: Task[] = [];

  // デフォルトでpublicになるので、アクセス修飾子は付けなくても良い
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;

  //   // 仮の配列を定義する
  //   let tasks = this.getAllTasks();

  //   // statusに関しての処理
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }

  //   // searchに関しての処理
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }

  //       return false;
  //     });
  //   }

  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    // タスクを取得しようとする
    const found = await this.tasksRepository.findOne(id);

    // なければエラーを返す(404)
    if (!found) {
      // エラーがnestjsで定義されている
      // エラーメッセージのカスタムも可能
      throw new NotFoundException(`タスク:${id} が見つかりません`);
    }

    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title: title,
  //     description: description,
  //     status: TaskStatus.OPEN,
  //   };

  //   this.tasks.push(task);

  //   return task;
  // }

  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);

  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }

  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;

  //   return task;
  // }
}
