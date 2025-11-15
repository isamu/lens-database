# Open source lens database

カメラレンズのオープンソースデータベース。各メーカーのレンズ情報をJSON形式で管理し、TypeScriptで型安全にアクセスできます。

## 概要

このプロジェクトは、カメラレンズの仕様情報をメーカー・マウント別に整理したデータベースです。
レンズの焦点距離、F値、重量、発売日などの詳細情報を構造化データとして提供します。

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
│   │   ├── all.ts                # 全データの集約
│   │   └── index.ts              # エクスポート
│   ├── run.ts                    # ドキュメント生成スクリプト
│   └── utils.ts                  # ユーティリティ関数
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
  id: string;                           // EAN/JANコード
  EANCode: string;                      // EAN/JANコード
  maker: Maker;                         // メーカー名
  name: string;                         // レンズ名
  mount: Mount;                         // マウントタイプ
  focalLength: number[];                // 焦点距離 [単焦点の場合は1つ、ズームは[min, max]]
  fStop: number[];                      // F値 [固定の場合は1つ、可変は[min, max]]
  format: Format;                       // センサーフォーマット
  focus: Focus[];                       // フォーカス方式
  hasStabilizer: boolean;               // 手ぶれ補正の有無
  hasDustMoistureResistance: boolean;   // 防塵防滴の有無
  filterDiameter?: number;              // フィルター径 (mm)
  theShortestShootingDistance?: number; // 最短撮影距離 (m)
  weight?: number;                      // 重量 (g)
  officialUrl?: string;                 // 公式URL
  images?: string[];                    // 画像URL
  urls: { [key: string]: string };      // その他URL (価格.comなど)
  releaseDate?: string;                 // 発売日 (YYYY or YYYY-MM-DD)
};
```

### サポートされているメーカー

- Canon
- Fujifilm
- SONY
- Nikon
- Leica
- ZEISS
- SIGMA
- Panasonic
- OLYMPUS
- PENTAX
- Tokina
- COSINA

### サポートされているマウント

- Canon: RF, RF-S, EF, EF-S, EF-M, FD
- Fujifilm: X, R
- Sony: A, E
- その他: M (Leica)

### フォーマット

- Large
- Full-Frame (フルサイズ)
- APS-C
- FourThirds

## データの追加・更新

### エンジニアの方

1. `src/data/{maker}/{mount}/index.ts` にレンズデータを追加
2. Pull Requestを作成

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
- データの検証 (ID、EANコードの重複チェック)
- メーカー・マウント別のMarkdownドキュメント生成
- `artifacts/data.json` の生成

### コードフォーマット

```bash
yarn run format
```

## 生成されるドキュメント

[ドキュメントインデックス](./docs/README.md)

現在サポートされているレンズ:
- Canon EF, EF-S, RF マウント
- Fujifilm X マウント
- Leica M マウント
- SIGMA EF-S, X マウント

## データソース

レンズデータは以下のパスに配置:
- `src/data/{maker}/{mount}/index.ts`

例: Canon RFマウントのデータは [src/data/canon/rf](./src/data/canon/rf) にあります。

## ライセンス

ISC

## コントリビューション

Pull Requestを歓迎します。データの追加や修正があれば、お気軽にご提案ください。

注意: `generate` スクリプトはメンテナーが実行しますので、データの追加のみを行ってください。

