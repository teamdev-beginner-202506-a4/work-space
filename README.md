# work-space
Cafe Recursion Home Pageの開発リポジトリ

## 環境構築

### パッケージのインストール
```
npm install
```

### TailwindCSSの使用
開発中は以下のコマンドを実行しておくことで、CSSを常に監視することができます。  
変更があった場合に自動でCSSを生成します。
生成したcssを反映するにはブラウザをリロードしてください。
```
npm run css
```


### ディレクトリ構成
GitHUbPagesで公開するためのディレクトリ構成は以下の通りです。
各ページのHTMLファイルは `docs/` ディレクトリに配置します。

- `docs/` 本番環境にあげたいファイル。GitHUbPagesで公開されるディレクトリ
  - index.html 本番環境のトップページ
- `src/` 開発中のファイル。TailwindCSSの設定ファイル
- README.md