<script setup lang="ts">
import type { Lens } from "../types";
import { fStopLabel, focalLabel } from "../lib/lens";
import { useLangPath } from "../composables/useLangPath";
import LensImage from "./LensImage.vue";
import MountChip from "./MountChip.vue";
import CompareButton from "./CompareButton.vue";

defineProps<{ lenses: Lens[]; equiv: boolean }>();
const { lensPath } = useLangPath();
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(168px,1fr))] gap-3">
    <RouterLink
      v-for="lens in lenses"
      :key="lens.id"
      :to="lensPath(lens.id)"
      class="bg-card border-line hover:border-line2 flex flex-col overflow-hidden rounded-2xl border transition-transform hover:-translate-y-0.5"
      :class="{ 'opacity-60': lens.discontinued }"
    >
      <div class="relative aspect-[4/3]">
        <LensImage :lens="lens" />
        <span
          v-if="lens.discontinued"
          class="absolute top-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[9.5px] font-bold text-red-300"
        >
          {{ $t("badge.discontinued") }}
        </span>
      </div>
      <div class="px-3 pt-2 pb-3">
        <div class="text-[12.5px] leading-snug font-semibold">{{ lens.name }}</div>
        <div class="text-mut mt-1 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span>{{ focalLabel(lens, equiv) }}</span>
          <span class="font-semibold text-amber-300">{{ fStopLabel(lens) }}</span>
          <MountChip :mount="lens.mount" />
        </div>
        <div class="mt-2">
          <CompareButton :lens="lens" />
        </div>
      </div>
    </RouterLink>
  </div>
</template>
