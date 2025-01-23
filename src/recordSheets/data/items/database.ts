import { engines } from "./engines";
import { headItems } from "./headItems";
import { helperWeapons } from "./helperWeapons";
import { Items } from "./itemBase";
import { LaserWeapons } from "./LaserWeapons";
import { randomItems } from "./randomItems";

export const ItemDatabase = {
  ...Items,
  ...headItems,
  ...engines,
  ...randomItems,
  ...helperWeapons,
  ...LaserWeapons,
};

export type AllItemNames = keyof typeof ItemDatabase;
