<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { findLens } from "../data/lenses";
import { IMAGES_REPO_URL, cropFactor, editDataUrl, fStopLabel, focalLabel, imageUrl } from "../lib/lens";
import { lastCatalogPath } from "../router";
import { useLangPath } from "../composables/useLangPath";
import LensImage from "../components/LensImage.vue";
import MountChip from "../components/MountChip.vue";
import SimilarLenses from "../components/SimilarLenses.vue";
import CompareButton from "../components/CompareButton.vue";
import type { Lens } from "../types";

const route = useRoute();
const { t } = useI18n();
const { catalogPath } = useLangPath();

const lens = computed(() => findLens(String(route.params.id)));
const backPath = computed(() => lastCatalogPath.value ?? catalogPath());

const imageMissing = ref(false);
watch(
  () => route.params.id,
  () => {
    imageMissing.value = false;
  },
);

const yesNo = (value: boolean | undefined): string => t(value ? "detail.yes" : "detail.no");

type SpecRow = { label: string; value: string };

const push = (rows: SpecRow[], label: string, value: string | undefined) => {
  if (value) rows.push({ label, value });
};

const focalValue = (): string => {
  const target = lens.value;
  if (!target) return "";
  const actual = focalLabel(target, false);
  if (cropFactor(target) === 1) return actual;
  return `${actual} (${t("detail.equivNote")} ${focalLabel(target, true)})`;
};

const specRows = computed((): SpecRow[] => {
  const l = lens.value;
  if (!l) return [];
  const rows: SpecRow[] = [];
  push(rows, t("detail.focalLength"), focalValue());
  push(rows, t("detail.fStop"), fStopLabel(l));
  push(rows, t("detail.format"), l.format);
  push(rows, t("detail.focus"), l.focus.join(" / "));
  push(rows, t("detail.stabilizer"), yesNo(l.hasStabilizer));
  push(rows, t("detail.weatherResistance"), yesNo(l.hasDustMoistureResistance));
  push(rows, t("detail.filterDiameter"), l.filterDiameter ? `φ${l.filterDiameter}mm` : undefined);
  push(
    rows,
    t("detail.minFocusDistance"),
    l.minFocusDistance ? `${l.minFocusDistance}m` : undefined,
  );
  push(
    rows,
    t("detail.maxMagnification"),
    l.maxMagnification ? `${l.maxMagnification}x` : undefined,
  );
  push(rows, t("detail.weight"), l.weight ? `${l.weight}g` : undefined);
  push(rows, t("detail.blades"), l.bladesCount ? `${l.bladesCount}` : undefined);
  if (l.elements && l.groups) {
    push(
      rows,
      t("detail.construction"),
      t("detail.constructionValue", { elements: l.elements, groups: l.groups }),
    );
  }
  if (l.diameter && l.length) {
    push(rows, t("detail.dimensions"), `φ${l.diameter} × ${l.length}mm`);
  }
  push(rows, t("detail.releaseDate"), l.releaseDate);
  if (l.discontinued) {
    push(rows, t("detail.discontinued"), l.discontinuedDate ?? t("detail.yes"));
  }
  push(rows, t("detail.note"), l.note);
  return rows;
});

const SOURCE_LABELS: Record<string, string> = {
  kakaku: "kakaku.com",
  amazonjp: "Amazon",
  official: "Official",
  yodobashi: "Yodobashi",
  bcn: "BCN",
};

type SourceLink = { label: string; url: string };

const sources = computed((): SourceLink[] => {
  const l = lens.value;
  if (!l) return [];
  const links: SourceLink[] = [];
  if (l.officialUrl) links.push({ label: "Official", url: l.officialUrl });
  Object.entries(l.urls ?? {}).forEach(([key, url]) => {
    if (url && !(key === "official" && url === l.officialUrl)) {
      links.push({ label: SOURCE_LABELS[key] ?? key, url });
    }
  });
  return links;
});

// Emit a JSON-LD Product record into <head> so search engines can index each
// lens as a structured product. Only fields we're confident about are exposed
// (name, brand, model, image, offer with MSRP when known).
const JSONLD_TAG_ID = "lens-jsonld";

const productJsonLd = (l: Lens): object => {
  const record: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: l.name,
    brand: { "@type": "Brand", name: l.maker },
    category: "Camera lens",
    image: imageUrl(l),
  };
  if (l.EANCode) record.gtin13 = l.EANCode;
  if (l.releaseDate) record.releaseDate = l.releaseDate;
  if (l.msrp) {
    record.offers = {
      "@type": "Offer",
      priceCurrency: "JPY",
      price: l.msrp,
      availability: l.discontinued
        ? "https://schema.org/Discontinued"
        : "https://schema.org/InStock",
    };
  }
  return record;
};

const removeJsonLd = () => {
  if (typeof document === "undefined") return;
  const existing = document.getElementById(JSONLD_TAG_ID);
  if (existing) existing.remove();
};

const injectJsonLd = (l: Lens) => {
  if (typeof document === "undefined") return;
  removeJsonLd();
  const el = document.createElement("script");
  el.type = "application/ld+json";
  el.id = JSONLD_TAG_ID;
  el.text = JSON.stringify(productJsonLd(l));
  document.head.appendChild(el);
};

watch(
  lens,
  (l) => {
    if (l) injectJsonLd(l);
    else removeJsonLd();
  },
  { immediate: true },
);

onBeforeUnmount(removeJsonLd);
</script>

<template>
  <div v-if="!lens" class="text-mut py-16 text-center text-sm">
    <p>{{ t("detail.notFound") }}</p>
    <RouterLink :to="catalogPath()" class="mt-3 inline-block text-sky-400 hover:underline">
      ← {{ t("detail.back") }}
    </RouterLink>
  </div>

  <div v-else>
    <RouterLink :to="backPath" class="text-mut hover:text-txt text-[13px]">
      ← {{ t("detail.back") }}
    </RouterLink>

    <div class="mt-4 grid gap-5 md:grid-cols-[minmax(260px,380px)_1fr]">
      <div class="border-line aspect-[4/3] overflow-hidden rounded-2xl border">
        <LensImage
          :lens="lens"
          icon-class="h-14 w-14"
          label-class="text-sm"
          @failed="imageMissing = true"
        />
      </div>

      <div class="min-w-0">
        <div class="text-mut flex flex-wrap items-center gap-2 text-xs">
          <span>{{ lens.maker }}</span>
          <MountChip :mount="lens.mount" />
          <span
            v-if="lens.discontinued"
            class="rounded-full bg-red-950 px-2 py-px text-[10px] font-semibold text-red-300"
          >
            {{ t("badge.discontinued") }}
          </span>
        </div>
        <div class="mt-1 flex flex-wrap items-center gap-2">
          <h1 class="text-xl font-bold">{{ lens.name }}</h1>
          <CompareButton :lens="lens" variant="button" />
        </div>

        <h2 class="text-mut mt-5 mb-2 text-[11px] font-semibold tracking-wider uppercase">
          {{ t("detail.specs") }}
        </h2>
        <table class="w-full text-[13px]">
          <tbody>
            <tr v-for="row in specRows" :key="row.label" class="border-line border-b">
              <th class="text-mut w-40 py-1.5 pr-3 text-left align-top font-normal">
                {{ row.label }}
              </th>
              <td class="py-1.5">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>

        <template v-if="sources.length">
          <h2 class="text-mut mt-5 mb-2 text-[11px] font-semibold tracking-wider uppercase">
            {{ t("detail.sources") }}
          </h2>
          <ul class="flex flex-wrap gap-2 text-[13px]">
            <li v-for="source in sources" :key="source.url">
              <a
                :href="source.url"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-card border-line hover:border-line2 inline-block rounded-lg border px-2.5 py-1 text-sky-400"
              >
                {{ source.label }} ↗
              </a>
            </li>
          </ul>
        </template>
      </div>
    </div>

    <SimilarLenses :target="lens" :equiv="false" />

    <div class="bg-card border-line mt-8 rounded-2xl border p-5">
      <h2 class="text-[15px] font-bold">{{ t("contribute.title") }}</h2>
      <p class="text-mut mt-1 text-[13px]">{{ t("contribute.text") }}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <a
          :href="editDataUrl(lens)"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-card2 border-line2 hover:border-mut rounded-lg border px-3.5 py-2 text-[13px] font-semibold"
        >
          ✏️ {{ t("contribute.edit") }}
        </a>
        <a
          v-if="imageMissing"
          :href="IMAGES_REPO_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-card2 border-line2 hover:border-mut rounded-lg border px-3.5 py-2 text-[13px] font-semibold"
        >
          📷 {{ t("contribute.addImage") }}
        </a>
      </div>
    </div>
  </div>
</template>
