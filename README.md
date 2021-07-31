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

## 参考

- [NestJS Zero to Hero - Modern TypeScript Back-end Development]()# nestjs-learning
