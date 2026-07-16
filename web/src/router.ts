import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import CatalogView from "./views/CatalogView.vue";
import LensDetailView from "./views/LensDetailView.vue";
import { browserLocale, i18n, isLocale } from "./i18n";

export const lastCatalogPath = ref<string | null>(null);

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:lang(ja|en)?", name: "catalog", component: CatalogView },
    { path: "/:lang(ja|en)?/lens/:id", name: "lens", component: LensDetailView },
  ],
});

router.beforeEach((to) => {
  const lang = to.params.lang;
  i18n.global.locale.value = isLocale(lang) ? lang : browserLocale();
});

router.afterEach((to) => {
  if (to.name === "catalog") lastCatalogPath.value = to.fullPath;
});
