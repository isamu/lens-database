import { computed, type WritableComputedRef } from "vue";
import { useRoute, useRouter, type LocationQuery } from "vue-router";
import type { SortDir, SortKey, StatusFilter, ViewMode } from "../types";

const queryString = (query: LocationQuery, key: string): string | undefined => {
  const value = query[key];
  return typeof value === "string" && value !== "" ? value : undefined;
};

const oneOf = <T extends string>(
  candidates: readonly T[],
  value: string | undefined,
  fallback: T,
): T => candidates.find((c) => c === value) ?? fallback;

export const useCatalogState = () => {
  const route = useRoute();
  const router = useRouter();

  const update = (patch: Record<string, string | undefined>) => {
    const query: LocationQuery = { ...route.query };
    Object.entries(patch).forEach(([key, value]) => {
      if (value === undefined) delete query[key];
      else query[key] = value;
    });
    router.replace({ query });
  };

  const listParam = (key: string): WritableComputedRef<string[]> =>
    computed({
      get: () => queryString(route.query, key)?.split(",") ?? [],
      set: (values) => update({ [key]: values.length ? values.join(",") : undefined }),
    });

  const choiceParam = <T extends string>(
    key: string,
    candidates: readonly T[],
    fallback: T,
  ): WritableComputedRef<T> =>
    computed({
      get: () => oneOf(candidates, queryString(route.query, key), fallback),
      set: (value) => update({ [key]: value === fallback ? undefined : value }),
    });

  const numberParam = (key: string): WritableComputedRef<number | undefined> =>
    computed({
      get: () => {
        const value = Number(queryString(route.query, key));
        return Number.isFinite(value) && value > 0 ? value : undefined;
      },
      set: (value) => update({ [key]: value && value > 0 ? String(value) : undefined }),
    });

  return {
    makers: listParam("maker"),
    mounts: listParam("mount"),
    formats: listParam("format"),
    focalFrom: numberParam("fmin"),
    focalTo: numberParam("fmax"),
    fstopMax: numberParam("fs"),
    status: choiceParam<StatusFilter>("status", ["all", "current", "discontinued"], "all"),
    mode: choiceParam<ViewMode>("mode", ["bars", "list", "gallery"], "bars"),
    sort: choiceParam<SortKey>("sort", ["focal", "fstop", "release", "name"], "focal"),
    dir: choiceParam<SortDir>("dir", ["asc", "desc"], "asc"),
    equiv: computed({
      get: () => route.query.eq === "1",
      set: (value: boolean) => update({ eq: value ? "1" : undefined }),
    }),
    clearFilters: () =>
      update({
        maker: undefined,
        mount: undefined,
        format: undefined,
        status: undefined,
        fmin: undefined,
        fmax: undefined,
        fs: undefined,
      }),
  };
};
