<script setup lang="ts" generic="T extends string">
defineProps<{ options: { value: T; label: string }[] }>();
const selected = defineModel<T>({ required: true });
</script>

<template>
  <div class="bg-card border-line inline-flex overflow-hidden rounded-lg border">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="cursor-pointer px-3 py-1.5 text-[13px]"
      :class="selected === option.value ? 'bg-card2 text-txt font-semibold' : 'text-mut'"
      @click="selected = option.value"
    >
      {{ option.label }}
    </button>
  </div>
</template>
