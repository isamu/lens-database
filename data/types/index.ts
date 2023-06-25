type Maker = "Canon";

type Mount = "RF" | "EF" | "EF-S";

export type LensData = {
  id: string;
  maker: Maker;
  name: string;
  mount: Mount;
  focalLength: number[];
};
