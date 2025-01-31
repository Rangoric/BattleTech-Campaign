import { rangoricMad5s } from "./rangoric-mad-5s";
import { saraswartiOW1C } from "./saraswarti-ow-1c";

export const allRecordSheets = {
  SARASWARTIOW1C: saraswartiOW1C,
  RANGORICMAD5S: rangoricMad5s,
};

export type AllSheetNames = keyof typeof allRecordSheets;
