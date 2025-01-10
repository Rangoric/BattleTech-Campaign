import { inanna } from "./inanna";
import { IRecordSheet } from "./IRecordSheet";
import { saraswarti } from "./saraswarti";

export const allUnits: Record<string, IRecordSheet> = {
  INANNA: inanna,
  SARASWARTI: saraswarti,
};
