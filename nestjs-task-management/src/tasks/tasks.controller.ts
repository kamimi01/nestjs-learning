import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

// Controllerは、クライアントとの出入り口になる（リクエストを受け取り、レスポンスを返す）
@Controller('tasks')
export class TasksController {
  // コンストラクタインジェクション
  // TypeScriptではコンストラクタ内でプロパティを定義できる（https://qiita.com/saba_can00/items/4e670235cf63763e63bd#parameter-properties%E3%81%A7%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E5%AE%A3%E8%A8%80%E3%82%92%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AB%E3%81%99%E3%82%8B）
  constructor(private tasksService: TasksService) {}

  // http://localhost:3000/tasks/{:id}
  // @Get()
  // getTask(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   // 何かフィルターしたい場合は、getTasksWithFiltersを呼ぶ
  //   // そうではない場合は、全てのタスクを取得する

  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
