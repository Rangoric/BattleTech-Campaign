import { engines } from "./engines";
import { gaussWeapons } from "./gaussWeapons";
import { headItems } from "./headItems";
import { heatSinks } from "./heatSinks";
import { helperWeapons } from "./helperWeapons";
import { Items } from "./itemBase";
import { LaserWeapons } from "./LaserWeapons";
import { LRMWeapons } from "./lrmWeapons";
import { randomItems } from "./randomItems";

export const ItemDatabase = {
  ...Items,
  ...headItems,
  ...engines,
  ...randomItems,
  ...helperWeapons,
  ...LaserWeapons,
  ...gaussWeapons,
  ...LRMWeapons,
  ...heatSinks,
};

export type AllItemNames = keyof typeof ItemDatabase;
