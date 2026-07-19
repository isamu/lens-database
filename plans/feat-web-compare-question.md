# Web: 選んだレンズ＋自由入力の質問を共有できる URL 機能 計画

Issue: https://github.com/isamu/lens-database/issues/21

## ゴール

比較で選んだレンズ（最大 5 本）について、ユーザーが自由入力した質問文
（例：「この中で星景に一番向いてるのは？」）を添えて共有できる **URL 発行機能** を追加する。
アプリは完全静的な Vue 3 SPA（Firebase Hosting のみ）である設計を維持する。

## URL スキーム

```
/compare?ids=a,b,c,d,e&q=<url-encoded question>
```

- `ids` … 既存。選択レンズ id（カンマ区切り、最大 5）
- `q`  … 新規。質問文（`URLSearchParams` でエンコード）

## 変更点

### 1. 最大本数 4 → 5

- `web/src/composables/useCompareShortlist.ts` の `MAX_COMPARE` を 5 に変更。
- i18n の `trayLabel` / `full` は `{max}` を参照しているため文言修正不要。

### 2. 比較ページに質問欄と URL コピー

`web/src/views/CompareView.vue`:

- `route.query.q` から初期質問文を読み、ローカル `ref` に保持。
- 選択が 1 本以上あるときのみ、上部に質問入力欄（textarea）を表示。
- 入力時に URL の `q`（および現在の `ids`）を `router.replace` で同期。
  → コピーされる URL に常に最新の質問文が乗る。
- 「URLをコピー」ボタン：`ids` + `q` から組み立てた絶対 URL をコピー。
  コピー後は 2 秒間「コピーしました ✓」を表示。
- `ids` / `q` の組み立ては `buildQuery()` に一本化し、アドレスバーとコピーされる
  URL が食い違わないようにする（DRY）。
- 既存の `removeColumn` を `buildQuery` 経由に統一し、`q` を保持。
  併せて既存バグを修正：`window.history.replaceState` は vue-router の
  `route.query` を更新しないため、`?ids=` 付きで開いた比較ページで列を削除しても
  表が再描画されなかった。`router.replace` に変更して解消。

### 4. クリップボード（新規 `web/src/lib/clipboard.ts`）

非セキュアオリジン / 旧 Safari では `navigator.clipboard` が使えないため、
隠し textarea + `execCommand` にフォールバックする純粋関数として切り出す。

### 3. i18n（ja / en）

`web/src/i18n.ts` の `compare` に追加：

- `ask` … 「選んだ{n}本について質問」/ "Ask about these {n} lenses"
- `askPlaceholder` … 例文プレースホルダ
- `copyUrl` … 「URLをコピー」/ "Copy URL"
- `copied` … 「コピーしました」/ "Copied"

## 非対象

- AI による自動回答（バックエンド・API キー・課金が必要）→ 別 PR で検討。
- SNS 共有ボタン（URL コピーのみ）。

## 検証

- `yarn --cwd web build`（vue-tsc + vite build）が通ること。
- dev サーバーで実際に操作：レンズ 5 本追加 → 比較 → 質問入力 → URL コピー →
  別タブでその URL を開き、質問文と 5 本が復元されること。
- ja / en 両方で表示確認。
