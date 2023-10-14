# database

## 始め方

1. `cp .env.example .env`を実行
2. .env の値を設定
3. `docker compose up`を実行

## 使用技術

- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)

## ディレクトリ構成

```text
database /
├── Dockerfile // 開発環境用の Dockerfile
├── prisma
│   └── seed // シード
│       └── example.ts // 各テーブルのseedファイル
│       └── index.ts // シードのエントリーポイント
│   └── migrations // マイグレーション
│   └── schema.prisma // Prismaスキーマ
├── src
│   ├── index.ts // エントリーポイント(@prisma/clientをexportしている)
└── tsconfig.json
```

## ルール

- 依存関係の追加や Script の実行はコンテナ内から行う
  - `docker compose exec database ash`でコンテナに入る
- マイグレーションファイルの命名規則
  - テーブル追加系 : `timestamp_create_テーブル名.sql`
  - テーブル削除系 : `timestamp_delete_テーブル名.sql`
  - カラム追加系 : `timestamp_add_カラム名_to_テーブル名.sql`
  - カラム削除系 : `timestamp_remove_カラム名_from_テーブル名.sql`
