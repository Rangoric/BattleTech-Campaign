import { mad5s } from "./units/mad5s";
import { rangoric } from "./characters/rangoric";

export const RecordSheetDatabase = {
  characters: {
    [rangoric.key]: rangoric,
  },
  units: {
    [mad5s.key]: mad5s,
  },
};
