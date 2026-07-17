<script setup lang="ts">
import { mountColor } from "../lib/lens";

defineProps<{ mount: string }>();
</script>

<template>
  <span
    class="inline-block rounded-md border px-1.5 text-[10px] font-bold whitespace-nowrap align-middle"
    :style="{ color: mountColor(mount), borderColor: mountColor(mount) }"
  >
    {{ mount }}
  </span>
</template>
