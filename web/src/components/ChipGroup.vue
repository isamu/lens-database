<script setup lang="ts">
export type ChipOption = { value: string; label: string; color?: string };

defineProps<{ label: string; options: ChipOption[] }>();
const selected = defineModel<string[]>({ required: true });

const toggle = (value: string) => {
  selected.value = selected.value.includes(value)
    ? selected.value.filter((v) => v !== value)
    : [...selected.value, value];
};
</script>

<template>
  <div class="flex flex-wrap items-center gap-1.5">
    <span class="text-mut w-20 shrink-0 text-[11px]">{{ label }}</span>
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="cursor-pointer rounded-full border px-2.5 py-0.5 text-xs transition-colors"
      :class="
        selected.includes(option.value)
          ? 'bg-card2 text-txt border-line2 font-semibold'
          : 'text-mut border-line hover:text-txt'
      "
      @click="toggle(option.value)"
    >
      <span
        v-if="option.color"
        class="mr-1 inline-block h-2 w-2 rounded-sm align-middle"
        :style="{ background: option.color }"
      ></span>
      {{ option.label }}
    </button>
  </div>
</template>
