<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { DATA_REPO_URL } from "./lib/lens";
import type { Locale } from "./i18n";
import CompareTray from "./components/CompareTray.vue";

const route = useRoute();
const { locale } = useI18n();

const langTarget = (lang: Locale): string => {
  const rest = route.fullPath.replace(/^\/(ja|en)(?=\/|\?|$)/, "");
  return `/${lang}${rest || "/"}`;
};

const languages = computed((): { lang: Locale; label: string }[] => [
  { lang: "ja", label: "日本語" },
  { lang: "en", label: "EN" },
]);
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 pb-16">
    <header class="border-line mb-5 flex items-center gap-3 border-b py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <span
          class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-red-500 to-amber-500 text-xl"
        >
          📷
        </span>
        <span class="text-lg font-bold">{{ $t("siteName") }}</span>
      </RouterLink>
      <span class="flex-1"></span>
      <nav class="bg-card border-line flex overflow-hidden rounded-lg border text-xs">
        <RouterLink
          v-for="item in languages"
          :key="item.lang"
          :to="langTarget(item.lang)"
          class="px-2.5 py-1.5"
          :class="locale === item.lang ? 'bg-card2 text-txt font-semibold' : 'text-mut'"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <a
        :href="DATA_REPO_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="text-mut hover:text-txt border-line hover:border-line2 rounded-lg border px-2.5 py-1.5 text-xs"
      >
        GitHub
      </a>
    </header>
    <main>
      <RouterView />
    </main>
    <CompareTray />
  </div>
</template>
