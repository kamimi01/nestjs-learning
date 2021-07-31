import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      // エンティティを定義する時に、自動的にエンティティがロードされる
      autoLoadEntities: true,
      // スキーマと同期する
      synchronize: true,
    }),
  ],
})
export class AppModule {}

// データベースの設定
