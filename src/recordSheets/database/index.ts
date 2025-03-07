import { characters } from "./characters";
import { units } from "./units";

export const RecordSheetDatabase = {
  characters,
  units,
};

export type AllCharacterCallSigns =
  keyof (typeof RecordSheetDatabase)["characters"];
export type AllUnitDesignations = keyof (typeof RecordSheetDatabase)["units"];
