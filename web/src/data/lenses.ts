import raw from "../../../artifacts/data.json";
import type { Lens } from "../types";

type Database = Record<string, Record<string, Lens[]>>;

const database: Database = raw;

export const lenses: Lens[] = Object.values(database).flatMap((mounts) =>
  Object.values(mounts).flat(),
);

const lensById = new Map(lenses.map((lens) => [lens.id, lens]));

export const findLens = (id: string): Lens | undefined => lensById.get(id);
