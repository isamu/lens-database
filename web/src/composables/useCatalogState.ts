import { computed, type WritableComputedRef } from "vue";
import { useRoute, useRouter, type LocationQuery } from "vue-router";
import type { ChartAxis, SortDir, SortKey, StatusFilter, ViewMode } from "../types";

const CHART_AXES: readonly ChartAxis[] = [
  "focal",
  "fstop",
  "weight",
  "length",
  "diameter",
  "filterDiameter",
  "minFocusDistance",
  "maxMagnification",
  "elements",
  "bladesCount",
  "angleOfView",
  "releaseYear",
  "msrp",
];

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
    mode: choiceParam<ViewMode>("mode", ["bars", "list", "gallery", "chart"], "bars"),
    sort: choiceParam<SortKey>("sort", ["focal", "fstop", "release", "name"], "focal"),
    dir: choiceParam<SortDir>("dir", ["asc", "desc"], "asc"),
    // Chart mode: which spec on X / Y, and per-axis log override.
    // Log state is three-way: "1" forces log, "0" forces linear, absent =
    // use each axis's own default (focal / fstop / weight / etc. default log).
    chartX: choiceParam<ChartAxis>("cx", CHART_AXES, "focal"),
    chartY: choiceParam<ChartAxis>("cy", CHART_AXES, "fstop"),
    chartLogX: choiceParam<"" | "1" | "0">("lx", ["", "1", "0"], ""),
    chartLogY: choiceParam<"" | "1" | "0">("ly", ["", "1", "0"], ""),
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
