# Nest.jsの学習用

## 環境構築

- Node.jsのバージョン管理ツールの導入
  - [nvm](https://github.com/nvm-sh/nvm)
    - 導入方法
      - [nvm(Node Version Manager)を使ってNode.jsをインストールする手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a)

- Nest.jsのCLI導入
  - `yarn global add @nestjs/cli`
- Nest.jsの新規プロジェクト作成
  - `nest new <プロジェクト名>`
  - 作成されたプロジェクトの構成

## デバッグ

- `.vscode`以下に以下のファイルを作成する

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch",
      "port": 9229,
      "runtimeExecutable": "yarn",
      "cwd": "${workspaceFolder}",
      "runtimeArgs": ["start:debug"],
      "console": "integratedTerminal"
    }
  ]
}
```

## Pipes

- 以下の用途がある
  - データの変換
  - バリデーション
- インストール必要なモジュール
  - `class-validator`
  - `class-transformer`

## データベースとの接続

- DockerでPostgreSQLを起動する
  - `docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres`
- 停止する
  - `docker container stop postgres-nest`
- pgAdmin
  - PostgresSQLでデータベースの操作をGUIで行えるツール

### オブジェクトリレーショナルマッピング（ORM）

- メリット
  - データモデルを1箇所にまとめることができるので、保守が簡単
  - 多くのことを自動で行ってくれる
    - データベースハンドリング
    - データ型
    - リレーション
  - SQLを書く必要がない
  - データベースの抽象化
    - 好きなタイミングでデータベースの種類を変更することができる
  - オブジェクト指向プログラミぐを活用できる
- デメリット
  - ORMライブラリはシンプルではない
  - パフォーマンスは良いが、無視することも簡単にできてしまう
  - 実際何が起きているかを忘れがちで、保守の際に問題が発生すると難しい場合がある

- TypeORM
  - Node.jsで動いている
  - エンティティを認識するにはファイル名に、`entity`をつける必要がある
  - Active RecordとData Mapper両方をサポートする
  - Udemyのコースでは、リポジトリ層を意識して、疎結合にすることによりテスト容易性を高めたいので、データマッパーの形を採用する

- 関連モジュールのインストール
  - typeorm
    - TypeORM
  - @nestjs/typeorm
    - nestjsのTypeORMのラッパー
  - pg
    - PostgresSQLの公式モジュール
## 参考

- [NestJS Zero to Hero - Modern TypeScript Back-end Development]()# nestjs-learning
