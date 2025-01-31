import { engines } from "./engines";
import { gaussWeapons } from "./gaussWeapons";
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
  ...gaussWeapons,
};

export type AllItemNames = keyof typeof ItemDatabase;
