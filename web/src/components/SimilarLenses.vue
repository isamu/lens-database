<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { lenses } from "../data/lenses";
import { similarLenses } from "../lib/similar";
import { fStopLabel, focalLabel, mountColor } from "../lib/lens";
import { useLangPath } from "../composables/useLangPath";
import LensImage from "./LensImage.vue";
import type { Lens } from "../types";

const props = defineProps<{ target: Lens; equiv: boolean }>();

const { t } = useI18n();
const { lensPath } = useLangPath();

const suggestions = computed(() => similarLenses(props.target, lenses, 6));
</script>

<template>
  <section v-if="suggestions.length" class="mt-8">
    <h2 class="text-mut mb-3 text-[11px] font-semibold tracking-wider uppercase">
      {{ t("detail.similar") }}
    </h2>
    <ul class="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      <li v-for="lens in suggestions" :key="lens.id">
        <RouterLink
          :to="lensPath(lens.id)"
          class="bg-card border-line hover:border-line2 flex gap-3 rounded-xl border p-2.5 transition-colors"
        >
          <div class="border-line aspect-square w-16 shrink-0 overflow-hidden rounded-lg border">
            <LensImage :lens="lens" icon-class="h-6 w-6" label-class="text-[10px]" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="text-mut flex items-center gap-1.5 text-[10px]">
              <span>{{ lens.maker }}</span>
              <span
                class="inline-block h-2 w-2 rounded-full"
                :style="{ background: mountColor(lens.mount) }"
                :title="lens.mount"
              />
              <span>{{ lens.mount }}</span>
            </div>
            <div class="mt-0.5 line-clamp-2 text-[13px] font-semibold leading-tight">
              {{ lens.name }}
            </div>
            <div class="text-mut mt-1 text-[11px]">
              {{ focalLabel(lens, equiv) }} · {{ fStopLabel(lens) }}
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
