<script setup lang="ts">
import type { Lens } from "../types";
import { fStopLabel, focalLabel, releaseYear } from "../lib/lens";
import { useLangPath } from "../composables/useLangPath";
import LensImage from "./LensImage.vue";
import MountChip from "./MountChip.vue";
import CompareButton from "./CompareButton.vue";

defineProps<{ lenses: Lens[]; equiv: boolean }>();
const { lensPath } = useLangPath();
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <RouterLink
      v-for="lens in lenses"
      :key="lens.id"
      :to="lensPath(lens.id)"
      class="bg-card border-line hover:border-line2 flex items-center gap-3 rounded-xl border px-2.5 py-1.5"
      :class="{ 'opacity-60': lens.discontinued }"
    >
      <div class="h-[42px] w-[56px] shrink-0 overflow-hidden rounded-md">
        <LensImage :lens="lens" icon-class="h-4 w-4" label-class="hidden" />
      </div>
      <div class="min-w-0 flex-1">
        <div class="truncate text-[13px] font-semibold">{{ lens.name }}</div>
        <div class="text-mut mt-0.5 truncate text-[11px]">
          <MountChip :mount="lens.mount" />
          {{ [lens.maker, lens.focus.join("/")].filter(Boolean).join(" · ") }}
        </div>
      </div>
      <div class="text-mut flex items-center gap-2.5 text-[11px] whitespace-nowrap tabular-nums">
        <span class="font-semibold text-amber-300">{{ fStopLabel(lens) }}</span>
        <span>{{ focalLabel(lens, equiv) }}</span>
        <span v-if="lens.weight" class="hidden sm:inline">{{ lens.weight }}g</span>
        <span v-if="releaseYear(lens)" class="hidden sm:inline">{{ releaseYear(lens) }}</span>
        <span
          v-if="lens.discontinued"
          class="rounded-full bg-red-950 px-2 py-px text-[10px] font-semibold text-red-300"
        >
          {{ $t("badge.discontinued") }}
        </span>
        <CompareButton :lens="lens" />
      </div>
    </RouterLink>
  </div>
</template>
