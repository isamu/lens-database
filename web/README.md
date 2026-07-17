# Lens Database Web

`lens-database` のデータ(`../artifacts/data.json`)をビルド時に取り込んで表示する、完全静的な Vue 3 SPA です。Firebase は Hosting のみ使用します(SDK・Functions・Firestore は不使用)。

## 開発

```bash
yarn --cwd web install
yarn --cwd web dev        # http://localhost:5173
```

データを更新した場合はリポジトリルートで `yarn generate` を実行して `artifacts/data.json` を再生成してから、web をビルドし直してください。

## ビルド

```bash
yarn --cwd web build      # vue-tsc + vite build -> web/dist/
yarn --cwd web preview    # ビルド結果のローカル確認
```

## デプロイ(Firebase Hosting)

Firebase プロジェクト: `lensfolio-databse`(`web/.firebaserc`)

```bash
cd web
yarn build
firebase deploy --only hosting
```

## 画像

レンズ画像は [isamu/lens-database-images](https://github.com/isamu/lens-database-images) の
`images/<maker>/<mount>/<EAN>.jpg` を GitHub raw URL で参照します。画像が無いレンズはプレースホルダー表示になり、詳細ページに「画像を追加する」リンクが出ます。
