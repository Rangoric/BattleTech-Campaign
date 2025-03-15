import { IActiveBattleMechSheet, IAmmoActiveSheet } from "../../recordSheets/database/equipment/ActiveSheets";
import { eLocations } from "../../recordSheets/database/units/eLocations";
import { eEquipmentType } from "../../recordSheets/database/equipment/itemBase";

export interface IAmmoWithLocation {
  location: eLocations;
  equipment: IAmmoActiveSheet;
}

export const getAllAmmoByName = (x: IActiveBattleMechSheet, y: string[] = []): IAmmoWithLocation[] => {
  if (y.length === 0) {
    return [];
  }
  const allItems: IAmmoWithLocation[] = [];
  for (const rawLocation in x.unit.locations) {
    const location = rawLocation as eLocations;
    for (const equipment of x.unit.locations[location].equipment) {
      if (y.includes(equipment.name) && equipment.type === eEquipmentType.Ammo) {
        allItems.push({ location: location as eLocations, equipment });
      }
    }
  }
  return allItems;
};
