import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  // パラメータが渡って来なくてもエラーにならない
  @IsOptional()
  // 特定の値に沿ったパラメータが来るようにする
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
