import { IActiveBattleMechSheet, IBattleMechLocationActiveSheet } from "./ActiveSheets";
import { eUnitType } from "./IRecordSheet";
import { IBattleMechLocations } from "./RecordSheets";

export const Actions = {
  [eUnitType.BattleMech]: {
    hitArmor: (location: keyof IBattleMechLocations<any>, damage: number, sheet: IActiveBattleMechSheet): IActiveBattleMechSheet => {
      const baseArmorDamage = sheet.unit.locations[location].armorDamage + damage;
      const armorDamage = Math.min(baseArmorDamage, sheet.unit.locations[location].armor);
      const structureDamage = sheet.unit.locations[location].structureDamage + Math.max(0, baseArmorDamage - sheet.unit.locations[location].armor);
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              armorDamage: armorDamage,
              structureDamage: structureDamage,
            },
          },
        },
      };
    },
    hitRearArmor: (
      location: keyof Pick<IBattleMechLocations<any>, "centerTorso" | "leftTorso" | "rightTorso">,
      damage: number,
      sheet: IActiveBattleMechSheet
    ): IActiveBattleMechSheet => {
      const baseRearArmorDamage = (sheet.unit.locations[location].rearArmorDamage ?? 0) + damage;
      const rearArmorDamage = Math.min(baseRearArmorDamage, sheet.unit.locations[location].rearArmor ?? 0);
      const structureDamage =
        sheet.unit.locations[location].structureDamage + Math.max(0, baseRearArmorDamage - (sheet.unit.locations[location].rearArmor ?? 0));
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              rearArmorDamage: rearArmorDamage,
              structureDamage: structureDamage,
            },
          },
        },
      };
    },
    hitStructure: (location: keyof IBattleMechLocations<any>, damage: number, sheet: IActiveBattleMechSheet): IActiveBattleMechSheet => {
      const structureDamage = sheet.unit.locations[location].structureDamage + damage;
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              structureDamage: structureDamage,
            },
          },
        },
      };
    },
    // Crit Slot being hit is 1 based because that's how it is.
    crit: (
      location: keyof IBattleMechLocations<IBattleMechLocationActiveSheet>,
      baseCritSlot: number,
      sheet: IActiveBattleMechSheet
    ): IActiveBattleMechSheet => {
      const critSlot = baseCritSlot - 1;
      const hitLocation = sheet.unit.locations[location];
      console.log(hitLocation);
      const equipment = hitLocation.equipment;
      const critSlots = equipment.flatMap((item) => {
        const slots = [];
        for (let i = 0; i < item.slots; i++) {
          slots.push(item);
        }
        return slots;
      });
      console.log(critSlots);
      const foundHit = critSlots[critSlot].hits.find((hit) => hit.location === location && hit.slot === baseCritSlot);
      if (foundHit) {
        critSlots[critSlot].hits.splice(critSlots[critSlot].hits.indexOf(foundHit), 1);
      } else {
        critSlots[critSlot].hits.push({ location, slot: baseCritSlot });
      }

      console.log(critSlots);
      console.log(sheet);
      return sheet;
    },
  },
};
