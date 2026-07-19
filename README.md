# Open source lens database

カメラレンズのオープンソースデータベース。各メーカーのレンズ情報をJSON形式で管理し、TypeScriptで型安全にアクセスできます。

**🔍 Web カタログ: [database.lensfolio.net](https://database.lensfolio.net/)**

収録レンズをブラウザで検索・比較できます。焦点距離バー(対数軸)・リスト・ギャラリーの3ビュー、メーカー/マウント/所有状況での絞り込み、焦点距離・開放F値でのレンジ検索、35mm換算トグルに対応。各レンズの詳細ページから GitHub の修正 PR を直接作成できます。

最大5本を並べて比較でき、「この中で星景に一番向いてるのは？」のような質問文を添えた共有URL(`/compare?ids=...&q=...`)をワンクリックでコピーできます。

## 概要

このプロジェクトは、カメラレンズの仕様情報をメーカー・マウント別に整理したデータベースです。
レンズの焦点距離、F値、重量、発売日などの詳細情報を構造化データとして提供します。

**現在 1283 本収録**(主要メーカーの2000年以降の交換レンズを網羅登録中)。

| メーカー | 本数 | メーカー | 本数 |
|---|---:|---|---:|
| SIGMA | 496 | Fujifilm | 68 |
| TAMRON | 196 | TTArtisan | 3 |
| Canon | 152 | Voigtländer | 2 |
| Nikon | 143 | Leica | 1 |
| SONY | 127 | 7Artisans / SG-image / Thypoch | 各 1 |
| Tokina | 92 | | |

マルチマウントのレンズは**マウントごとに1レコード**として登録しています(EAN/JAN もマウント別のため)。

データは公式サイトを一次情報とし、裏取りできない値は記載しない方針です(価格.com はスペック表・登録日ともに誤りが混入するため補助的にのみ使用)。

## Usage

### インストール

```bash
yarn add https://github.com/isamu/lens-database.git
```

### 使用方法

```typescript
import lens from "lens-database";
// または
import { allLensData } from "lens-database";
```

## ファイル構成

```
lens-database/
├── src/                          # ソースコード
│   ├── data/                     # レンズデータ
│   │   ├── types/                # 型定義
│   │   │   └── index.ts          # LensData型などの定義
│   │   ├── canon/                # Canonレンズデータ
│   │   │   ├── rf/               # RFマウント
│   │   │   ├── ef/               # EFマウント
│   │   │   ├── ef-s/             # EF-Sマウント
│   │   │   ├── ef-m/             # EF-Mマウント
│   │   │   ├── rf-s/             # RF-Sマウント
│   │   │   └── fd/               # FDマウント
│   │   ├── sigma/                # SIGMAレンズデータ
│   │   ├── fujifilm/             # Fujifilmレンズデータ
│   │   ├── leica/                # Leicaレンズデータ
│   │   ├── nikon/                # Nikonレンズデータ
│   │   ├── sony/                 # Sonyレンズデータ
│   │   ├── olympus/              # OLYMPUSレンズデータ
│   │   ├── panasonic/            # Panasonicレンズデータ
│   │   ├── pentax/               # PENTAXレンズデータ
│   │   ├── cosina/               # COSINAレンズデータ
│   │   ├── zeiss/                # ZEISSレンズデータ
│   │   ├── tokina/               # Tokinaレンズデータ
│   │   ├── tamron/               # TAMRONレンズデータ
│   │   ├── ttartisan/            # TTArtisanレンズデータ
│   │   ├── sevenartisans/        # 7Artisansレンズデータ
│   │   ├── sg-image/             # SG-imageレンズデータ
│   │   ├── thypoch/              # Thypochレンズデータ
│   │   ├── all.ts                # 全データの集約
│   │   └── index.ts              # エクスポート (新しいメーカーはここに追加が必要)
│   ├── run.ts                    # ドキュメント生成スクリプト
│   ├── ean.ts                    # EAN-13 チェックディジット検証
│   └── utils.ts                  # ユーティリティ関数
├── web/                          # Web カタログ (Vue 3 + Vite の静的SPA)
├── build/                        # ビルド出力
│   └── data/                     # コンパイル済みデータ
├── docs/                         # 生成されたMarkdownドキュメント
│   ├── canon/                    # メーカー別ドキュメント
│   ├── sigma/
│   ├── fujifilm/
│   └── README.md                 # ドキュメントインデックス
├── artifacts/                    # 成果物
│   └── data.json                 # 全データのJSON出力
├── package.json                  # パッケージ設定
└── tsconfig.json                 # TypeScript設定
```

## データ構造

### 型定義

[型定義の詳細](./src/data/types/index.ts)

```typescript
export type LensData = {
  // 基本情報
  id: string;                           // プライマリキー (EAN/JANコードまたは一意のID)
  EANCode?: string;                     // EAN/JANコード (存在する場合)
  maker: Maker;                         // メーカー名
  name: string;                         // レンズ名
  mount: Mount;                         // マウントタイプ

  // 光学仕様
  focalLength: number[];                // 焦点距離 [単焦点の場合は1つ、ズームは[min, max]]
  fStop: number[];                      // F値 [固定の場合は1つ、可変は[ワイド端, テレ端]]
  format: Format;                       // センサーフォーマット
  focus: Focus[];                       // フォーカス方式 (AF, MF)
  minFocusDistance?: number;            // 最短撮影距離 (m)
  maxMagnification?: number;            // 最大撮影倍率
  bladesCount?: number;                 // 絞り羽根枚数
  elements?: number;                    // レンズ構成枚数
  groups?: number;                      // レンズ構成群数

  // 機能
  hasStabilizer: boolean;               // 手ぶれ補正の有無
  hasDustMoistureResistance: boolean;   // 防塵防滴構造
  isInternalFocus?: boolean;            // インナーフォーカス方式
  hasMacro?: boolean;                   // マクロ(0.5:1以上を謳うもの)
  hasFisheye?: boolean;                 // 魚眼(対角/円周)
  hasTiltShift?: boolean;               // ティルト・シフト(TS-E, PC-E, Shift等)
  hasSoftFocus?: boolean;               // ソフトフォーカス(Thambar等)

  // 光学仕様(拡張)
  angleOfView?: number[];               // 対角画角(度)。[単焦点] または [ワイド, テレ]
  imageCircle?: number;                 // イメージサークル径(mm)。主にシフトレンズ・probe用

  // 物理仕様
  filterDiameter?: number;              // フィルター径 (mm)
  diameter?: number;                    // レンズ直径 (mm)
  length?: number;                      // レンズ長 (mm)
  weight?: number;                      // 重量 (g)

  // 発売・価格
  msrp?: number;                        // 希望小売価格(円、税込)
  releaseDate?: string;                 // 発売日 (YYYY or YYYY-MM-DD)
  discontinued?: boolean;               // 生産終了
  discontinuedDate?: string;            // 生産終了日 (YYYY or YYYY-MM-DD)

  // 関係
  predecessorId?: string;               // 前世代のid参照
  successorId?: string;                 // 後継世代のid参照
  compatibleBodies?: string[];          // 公式に対応するカメラボディ名

  // URL・参照情報
  officialUrl?: string;                 // 公式URL
  images?: string[];                    // 画像URL
  urls?: LensUrls;                      // その他URL (価格.com、Amazonなど)

  // アクセサリ
  hoodModel?: string;                   // レンズフード型番
  caseModel?: string;                   // レンズケース型番
  note?: string;                        // 自由記述メモ
};
```

**自動導出**: `hasMacro / hasFisheye / hasTiltShift / hasSoftFocus` はレンズ
名(英・和・マクロ/マクロ/フィッシュアイ等)から `yarn generate` 時に自動で
判定して補完する(`src/derive.ts`)。ソース側で明示的に指定すれば
そちらが優先される。`angleOfView` も明示指定が無ければ焦点距離とセンサー
フォーマットの対角から自動計算する(魚眼は幾何が異なるためスキップ、
ソース側で明示指定を推奨)。

### サポートされているメーカー

型定義上サポートされるメーカーと、現在の収録状況(計 **1,936 本**):

| メーカー | 収録 | メーカー | 収録 |
|---|---|---|---|
| SIGMA | 496 | Voigtländer | 62 |
| TAMRON | 196 | 7Artisans | 54 |
| Canon | 152 | Panasonic | 48 |
| Nikon | 143 | OLYMPUS | 20 |
| SONY | 127 | Thypoch | 13 |
| Tokina | 92 | OM SYSTEM | 8 |
| PENTAX | 90 | TTArtisan | 84 |
| Laowa | 86 | SG-image | 1 |
| Fujifilm | 68 | COSINA | — |
| Viltrox | 67 | | |
| ZEISS | 65 | | |
| Leica | 64 | | |

「—」は型定義はあるが未登録(COSINA 銘の製品は Voigtländer として登録)。

### サポートされているマウント

型定義上のマウント:

- Canon: RF, RF-S, EF, EF-S, EF-M, FD
- Fujifilm: X, G, R
- Sony: A, E
- Nikon: Z, F
- Leica: M, L
- Panasonic: L, FourThirds, MicroFourThirds
- Olympus: FourThirds, MicroFourThirds
- Pentax: K, 645
- SIGMA: SA

SIGMA / TAMRON / Tokina などのサードパーティ製レンズは、上記の他社マウント側に登録されます
(例: SIGMA の E マウント用レンズは `mount: "E"`)。

### フォーマット

- Large (中判)
- Full-Frame (フルサイズ)
- APS-C
- FourThirds

## データの追加・更新

### エンジニアの方

1. `src/data/{maker}/{mount}/index.ts` にレンズデータを追加
2. **新しいメーカー・マウントのディレクトリを作った場合は、`src/data/{maker}/index.ts` と `src/data/index.ts` への export 追加を忘れずに**
   (`src/data/all.ts` は export された配列を集約する仕組みのため、**繋ぎ忘れるとビルドも `generate` も成功したままデータだけが反映されません**)
3. Pull Requestを作成

データの方針:
- `id` は EAN/JAN を優先し、取得できない場合のみ `{maker}-{model}-{mount}` 形式のスラッグにする
- **裏取りできない値は書かない**(任意フィールドは省略可)。必須は `id` / `maker` / `name` / `mount` / `focalLength` / `fStop` / `format` / `focus` / `hasStabilizer` / `hasDustMoistureResistance`
- 出典は公式サイトを優先

例:
```typescript
{
  id: "4549292156263",
  EANCode: "4549292156263",
  maker: "Canon",
  name: "RF70-200mm F2.8 L IS USM",
  mount: "RF",
  focalLength: [70, 200],
  fStop: [2.8],
  format: "Full-Frame",
  focus: ["AF"],
  hasStabilizer: true,
  hasDustMoistureResistance: true,
  filterDiameter: 77,
  weight: 1070,
  releaseDate: "2019-11-21",
  officialUrl: "https://global.canon/en/c-museum/product/rf486.html",
  urls: {
    kakaku: "https://kakaku.com/item/..."
  }
}
```

### エンジニアでない方

Issueを作成し、レンズ名をタイトルに、データを本文に記載してください。

## 開発

### ビルド

```bash
yarn build
```

### ドキュメント生成

`docs/` ディレクトリ以下にMarkdownドキュメントと `artifacts/data.json` を生成:

```bash
yarn run generate
```

このコマンドは以下を実行します:
- データの検証
  - ID・EANコードの重複チェック
  - **EAN-13 のチェックディジット検証** (誤った JAN の混入を防ぐ。`id` は外部から参照されるプライマリキーのため、マージ後の変更は破壊的変更になる)
- メーカー・マウント別のMarkdownドキュメント生成
- `artifacts/data.json` の生成

検証に失敗した場合は `invalid data` を出力して生成を中止します。

### Web カタログ

`web/` は `artifacts/data.json` をビルド時に取り込む静的 SPA (Vue 3 + Vite) です。
データを更新したら `yarn generate` の後に再ビルドしてください:

```bash
yarn generate            # artifacts/data.json を更新
yarn --cwd web build     # カタログを再ビルド
yarn --cwd web preview   # ローカル確認
```

### コードフォーマット

```bash
yarn run format
```

## 生成されるドキュメント

[ドキュメントインデックス](./docs/README.md)

メーカー・マウント別の Markdown が `docs/{maker}/{mount}/index.md` に生成されます。

## データソース

レンズデータは以下のパスに配置:
- `src/data/{maker}/{mount}/index.ts`

例: Canon RFマウントのデータは [src/data/canon/rf](./src/data/canon/rf) にあります。

## ライセンス

ISC

## コントリビューション

Pull Requestを歓迎します。データの追加や修正があれば、お気軽にご提案ください。

注意: `generate` スクリプトはメンテナーが実行しますので、データの追加のみを行ってください。

