import { IEquipmentActiveSheet, IHits } from "@/recordSheets/database/equipment/ActiveSheets";
import { AllItemNames, ItemDatabase } from "./database";

export const Equipment = {
  equipItems: (...names: AllItemNames[]): IEquipmentActiveSheet[] => {
    return names.map((name) => {
      const item = ItemDatabase[name];
      return {
        ...item,
        hits: [] as IHits[],
      };
    });
  },
};
