import { computed, ref } from "vue";

// Small persistent shortlist of lens ids the user pinned for side-by-side
// comparison. Up to MAX_COMPARE entries. Backed by localStorage so it survives
// tab reloads and mode switches. `useCompareShortlist()` returns a singleton
// (module-level ref) so every component sees the same list.

const STORAGE_KEY = "lens-compare-ids";
export const MAX_COMPARE = 5;

const readInitial = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((v): v is string => typeof v === "string" && v.length > 0)
      .slice(0, MAX_COMPARE);
  } catch {
    return [];
  }
};

const ids = ref<string[]>(readInitial());

const persist = () => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids.value));
  } catch {
    // Storage may be blocked (private mode, quota). Fail silently — the state
    // still works in-memory for the current session.
  }
};

export const useCompareShortlist = () => {
  const has = (id: string) => ids.value.includes(id);

  const add = (id: string) => {
    if (has(id) || ids.value.length >= MAX_COMPARE) return;
    ids.value = [...ids.value, id];
    persist();
  };

  const remove = (id: string) => {
    ids.value = ids.value.filter((v) => v !== id);
    persist();
  };

  const toggle = (id: string) => {
    if (has(id)) remove(id);
    else add(id);
  };

  const clear = () => {
    ids.value = [];
    persist();
  };

  const isFull = computed(() => ids.value.length >= MAX_COMPARE);

  return { ids, has, add, remove, toggle, clear, isFull };
};
