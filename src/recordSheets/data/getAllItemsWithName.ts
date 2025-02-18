import { IActiveBattleMechSheet, IAmmoActiveSheet } from "./ActiveSheets";
import { eLocations } from "./eLocations";
import { eEquipmentType } from "./items/itemBase";

export interface IAmmoWithLocation {
  location: eLocations;
  equipment: IAmmoActiveSheet;
}

export const getAllAmmoByName = (
  x: IActiveBattleMechSheet,
  y: string[] = []
): IAmmoWithLocation[] => {
  if (y.length === 0) {
    return [];
  }
  const allItems: IAmmoWithLocation[] = [];
  for (const rawLocation in x.unit.locations) {
    const location = rawLocation as eLocations;
    for (const equipment of x.unit.locations[location].equipment) {
      if (
        y.includes(equipment.name) &&
        equipment.type === eEquipmentType.Ammo
      ) {
        allItems.push({ location: location as eLocations, equipment });
      }
    }
  }
  return allItems;
};
