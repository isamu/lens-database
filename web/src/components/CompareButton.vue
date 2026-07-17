<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { MAX_COMPARE, useCompareShortlist } from "../composables/useCompareShortlist";
import type { Lens } from "../types";

const props = defineProps<{
  lens: Lens;
  variant?: "chip" | "button";
}>();

const { t } = useI18n();
const shortlist = useCompareShortlist();

const pinned = computed(() => shortlist.has(props.lens.id));
const disabled = computed(() => !pinned.value && shortlist.isFull.value);

const label = computed(() => {
  if (pinned.value) return t("compare.remove");
  if (disabled.value) return t("compare.full", { max: MAX_COMPARE });
  return t("compare.add");
});

const onClick = (event: Event) => {
  event.stopPropagation();
  event.preventDefault();
  shortlist.toggle(props.lens.id);
};
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :title="label"
    class="inline-flex items-center gap-1 rounded-lg border text-[11px] font-semibold transition-colors"
    :class="[
      variant === 'button' ? 'px-2.5 py-1' : 'px-2 py-0.5',
      pinned
        ? 'border-sky-500 bg-sky-500/15 text-sky-300 hover:bg-sky-500/25'
        : 'border-line text-mut hover:text-txt hover:border-line2',
      disabled && !pinned ? 'cursor-not-allowed opacity-50 hover:text-mut' : '',
    ]"
    @click="onClick"
  >
    <span aria-hidden="true">{{ pinned ? "✓" : "⇄" }}</span>
    <span>{{ label }}</span>
  </button>
</template>
