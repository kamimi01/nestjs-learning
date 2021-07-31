import { IsNotEmpty } from 'class-validator';

// DTOはクラスで定義することが推奨されている
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
