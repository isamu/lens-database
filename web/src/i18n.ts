import { createI18n } from "vue-i18n";

const en = {
  siteName: "Lens Database",
  catalog: {
    lenses: "lenses",
    makers: "makers",
    coverage: "focal coverage",
    coverageEq: "focal coverage (35mm eq.)",
    noMatch: "No matching lenses",
  },
  filter: {
    maker: "Maker",
    mount: "Mount",
    format: "Format",
    status: "Status",
    all: "All",
    current: "In production",
    discontinued: "Discontinued",
    clear: "Clear filters",
  },
  sort: {
    label: "Sort",
    focal: "Focal length",
    fstop: "F-number",
    release: "Release date",
    name: "Name",
    asc: "Asc",
    desc: "Desc",
  },
  mode: { bars: "Focal bars", list: "List", gallery: "Gallery" },
  equiv: { label: "35mm eq.", title: "Show and sort focal lengths as 35mm equivalent" },
  noImage: "No image yet",
  badge: { discontinued: "Discontinued" },
  detail: {
    back: "Back to catalog",
    specs: "Specifications",
    focalLength: "Focal length",
    equivNote: "35mm equivalent",
    fStop: "Aperture",
    format: "Format",
    focus: "Focus",
    stabilizer: "Image stabilizer",
    weatherResistance: "Dust / moisture resistance",
    filterDiameter: "Filter diameter",
    minFocusDistance: "Min. focus distance",
    maxMagnification: "Max. magnification",
    weight: "Weight",
    blades: "Aperture blades",
    construction: "Lens construction",
    constructionValue: "{elements} elements in {groups} groups",
    dimensions: "Dimensions",
    releaseDate: "Release date",
    discontinued: "Discontinued",
    note: "Note",
    yes: "Yes",
    no: "No",
    sources: "Sources",
    notFound: "Lens not found.",
  },
  contribute: {
    title: "Improve this page",
    text: "This catalog is maintained on GitHub. Spotted a wrong spec or a missing photo? Pull requests are welcome.",
    edit: "Fix this data on GitHub",
    addImage: "Add a photo",
  },
};

const ja = {
  siteName: "Lens Database",
  catalog: {
    lenses: "本",
    makers: "メーカー",
    coverage: "焦点距離カバー範囲",
    coverageEq: "焦点距離カバー範囲（35mm換算）",
    noMatch: "該当するレンズがありません",
  },
  filter: {
    maker: "メーカー",
    mount: "マウント",
    format: "フォーマット",
    status: "状況",
    all: "すべて",
    current: "現行",
    discontinued: "生産終了",
    clear: "クリア",
  },
  sort: {
    label: "並び順",
    focal: "焦点距離",
    fstop: "F値",
    release: "発売日",
    name: "名前",
    asc: "昇順",
    desc: "降順",
  },
  mode: { bars: "焦点距離バー", list: "リスト", gallery: "ギャラリー" },
  equiv: { label: "35mm換算", title: "焦点距離を35mm判換算で表示・ソート" },
  noImage: "No image yet",
  badge: { discontinued: "生産終了" },
  detail: {
    back: "カタログへ戻る",
    specs: "スペック",
    focalLength: "焦点距離",
    equivNote: "35mm判換算",
    fStop: "開放F値",
    format: "フォーマット",
    focus: "フォーカス",
    stabilizer: "手ブレ補正",
    weatherResistance: "防塵防滴",
    filterDiameter: "フィルター径",
    minFocusDistance: "最短撮影距離",
    maxMagnification: "最大撮影倍率",
    weight: "重量",
    blades: "絞り羽根",
    construction: "レンズ構成",
    constructionValue: "{groups}群{elements}枚",
    dimensions: "最大径×長さ",
    releaseDate: "発売日",
    discontinued: "生産終了",
    note: "備考",
    yes: "あり",
    no: "なし",
    sources: "出典",
    notFound: "レンズが見つかりません。",
  },
  contribute: {
    title: "このページを改善する",
    text: "このカタログは GitHub で管理されています。スペックの誤りや写真の不足に気づいたら、ぜひ Pull Request を送ってください。",
    edit: "このデータを修正する",
    addImage: "画像を追加する",
  },
};

export type Locale = "ja" | "en";

export const isLocale = (value: unknown): value is Locale => value === "ja" || value === "en";

export const browserLocale = (): Locale =>
  String(navigator.language || "")
    .toLowerCase()
    .startsWith("ja")
    ? "ja"
    : "en";

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: { en, ja },
});
