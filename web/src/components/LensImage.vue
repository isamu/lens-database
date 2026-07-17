<script setup lang="ts">
import { ref, watch } from "vue";
import type { Lens } from "../types";
import { imageUrl } from "../lib/lens";

const props = defineProps<{ lens: Lens; iconClass?: string; labelClass?: string }>();
const emit = defineEmits<{ failed: [] }>();

const failed = ref(false);
watch(
  () => props.lens.id,
  () => {
    failed.value = false;
  },
);

const onError = () => {
  failed.value = true;
  emit("failed");
};
</script>

<template>
  <div class="bg-card2 relative h-full w-full overflow-hidden">
    <img
      v-if="!failed"
      :src="imageUrl(lens)"
      :alt="lens.name"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover"
      @error="onError"
    />
    <div v-else class="text-mut absolute inset-0 flex flex-col items-center justify-center gap-1">
      <svg
        :class="iconClass ?? 'h-8 w-8'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 3v4.5M12 16.5V21M3 12h4.5M16.5 12H21" opacity="0.5" />
      </svg>
      <span :class="labelClass ?? 'text-[10px]'">{{ $t("noImage") }}</span>
    </div>
  </div>
</template>
