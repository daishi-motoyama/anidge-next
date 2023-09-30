# anidge

## 始め方

1. リポジトリをクローンする（[クローン方法](https://docs.github.com/ja/repositories/creating-and-managing-repositories/))
2. `pnpm install`を実行する
   1. admin, common, provider, public-user の個別パッケージも install される

## ディレクトリ構造
```text
root
└── admin // サイト管理者の機能
└── provider // 提供者の機能（ex. 動物愛護団体）
└── public-user // サイト一般利用者の機能
└── common // 共通で使用するpackage
```

## ルール

admin, common, provider, public-user それぞれの README を確認してください

- [admin README](/admin/README.md)
- [provider README](/provider/README.md)
- [public-user README](/public-user/README.md)
- [common README](/common/README.md)