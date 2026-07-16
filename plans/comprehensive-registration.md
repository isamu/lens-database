# 主要メーカー・2000年以降の交換レンズ網羅登録 計画

Issue: https://github.com/isamu/lens-database/issues/1

## ゴール

主要メーカーの 2000-01-01 以降に発売された交換レンズを網羅的に登録し、
lensfolio(Firestore)連携でユーザー所有レンズが `lensId` で参照できる状態にする。

## スコープ

| グループ | マウント | 概算本数 |
|---|---|---|
| Canon | EF / EF-S / EF-M / RF / RF-S | 180–220 |
| Nikon | F (AF-S/AF-P) / Z | 150–180 |
| Sony | A / E | 120–150 |
| Fujifilm | X / G (GFX) | 60–70 |
| Panasonic / OLYMPUS / OM SYSTEM | FourThirds / MicroFourThirds / L | 130–160 |
| PENTAX | K / 645 | 60–80 |
| SIGMA / TAMRON / Tokina | ホストマウント別 | 200–300 |
| Leica / ZEISS / Voigtländer | M / L ほか | 100–150 |
| 所有ブランド (TTArtisan / 7Artisans / SG-image / Thypoch) | 所有分は必須 | 7+ |

### 除外

- シネレンズ(動画専用)
- テレコンバーター・マウントアダプター
- コンパクトカメラ固定レンズ
- Pentax Q(コンパクト系・専用小型フォーマットのため)

## データ規約

- `id`: EAN/JAN 13桁を優先。入手不能な場合のみ `<maker>-<slug>`(例: `ttartisan-af-35mm-f18-ii-x`)
- 必須: `maker` / `name`(公式表記) / `mount` / `focalLength` / `fStop` / `format` / `focus` /
  `hasStabilizer` / `hasDustMoistureResistance`
- 判明する範囲で: `filterDiameter` / `weight` / `minFocusDistance` / `releaseDate` /
  `discontinued(+Date)` / `urls`(出典として必ず1つ以上)
- **推測値を書かない**。裏取りできない項目は省略(optional)
- 出典の優先順: メーカー公式スペックページ > 価格.com > 量販店(ヨドバシ等)
- マルチマウント品(SIGMA / TAMRON / Tokina / TTArtisan 等)はマウントごとに別レコード
  (EAN もマウントごとに異なる)。`name` は同一、`mount` と `id` が異なる
- ブランド表記: Voigtländer 銘は maker=`Voigtländer`(データ配置は `src/data/cosina/`)。
  2022年以降の OM 銘は maker=`OM SYSTEM`、それ以前は `OLYMPUS`

## 検証フロー(各メーカーPR共通)

1. 一次リスト作成: 公式レンズ一覧・Wikipedia のレンズ年表から 2000 年以降の製品リストを作る
2. 1本ずつスペック裏取り(公式/価格.com)して TS データを書く
3. 独立レビューパス: リストの抜け(網羅性)とスペック誤りを別途チェック
4. `yarn format` / `yarn build` / `yarn generate`(id/EAN 重複バリデーション込み)を通す
5. `artifacts/data.json` と `docs/` の再生成をコミットに含める

## PR 分割

1. ✅ 型拡張(Maker/Mount 追加)+ 本計画ファイル … このPR
2. Canon(手持ち EF/EF-S/RF 含む)
3. Fujifilm(手持ち X 含む)
4. Nikon
5. Sony
6. SIGMA / TAMRON / Tokina(手持ち分含む)
7. Panasonic / OLYMPUS / OM SYSTEM
8. PENTAX
9. Leica / ZEISS / Voigtländer(手持ち NOKTON ×2 含む)
10. 所有ブランド(TTArtisan / 7Artisans / SG-image / Thypoch)

## 既存データの修正事項(該当メーカーPRで対応)

- `SIGMA 30mm F1.4 EX DC HSM` の mount が `EF-S` になっている → Canon EF が正
  (APS-C 専用だがマウントは EF)
- 世代違いの確認: XF16-55mmF2.8 は初代収録済み・II 型未収録(両方保持)、
  EF-S55-250 は IS II 収録済み・初代 IS 未収録(両方保持)
