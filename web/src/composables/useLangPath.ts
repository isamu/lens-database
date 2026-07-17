import { computed } from "vue";
import { useRoute, type RouteLocationRaw } from "vue-router";
import { isLocale } from "../i18n";

export const useLangPath = () => {
  const route = useRoute();
  const prefix = computed(() => (isLocale(route.params.lang) ? `/${route.params.lang}` : ""));
  const lensPath = (id: string) => `${prefix.value}/lens/${encodeURIComponent(id)}`;
  const catalogPath = () => `${prefix.value}/`;
  const comparePath = (ids: string[]): RouteLocationRaw => ({
    path: `${prefix.value}/compare`,
    query: ids.length ? { ids: ids.join(",") } : {},
  });
  return { prefix, lensPath, catalogPath, comparePath };
};
