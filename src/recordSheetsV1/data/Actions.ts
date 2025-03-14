import {
  eMovementSpeed,
  IActiveBattleMechSheet,
  IAmmoActiveSheet,
  IBattleMechLocationActiveSheet,
} from "../../recordSheets/database/equipment/ActiveSheets";
import { eLocations } from "../../recordSheets/database/units/eLocations";
import { eUnitType } from "./IRecordSheets";
import { IBattleMechLocations } from "./IRecordSheets";
import { eEquipmentType } from "../../recordSheets/database/equipment/itemBase";

export const Actions = {
  [eUnitType.BattleMech]: {
    gainHeat: (sheet: IActiveBattleMechSheet, heat: number): IActiveBattleMechSheet => {
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          heat: {
            ...sheet.unit.heat,
            currentHeat: sheet.unit.heat.currentHeat + heat,
          },
        },
      };
    },
    spendAmmo: (
      sheet: IActiveBattleMechSheet,
      location: keyof IBattleMechLocations<object>,
      ammo: IAmmoActiveSheet,
      used: number,
    ): IActiveBattleMechSheet => {
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              equipment: sheet.unit.locations[location].equipment.map((x) => {
                if (x.name === ammo.name && x.type === eEquipmentType.Ammo) {
                  return {
                    ...x,
                    used: used + (x.used ?? 0),
                  };
                } else {
                  return x;
                }
              }),
            },
          },
        },
      };
    },
    move: (sheet: IActiveBattleMechSheet, distance: eMovementSpeed): IActiveBattleMechSheet => {
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          movement: {
            ...sheet.unit.movement,
            currentMovement: distance,
          },
        },
      };
    },
    hitArmor: (
      location: keyof IBattleMechLocations<object>,
      damage: number,
      sheet: IActiveBattleMechSheet,
    ): IActiveBattleMechSheet => {
      const baseArmorDamage = sheet.unit.locations[location].armorDamage + damage;
      const armorDamage = Math.min(baseArmorDamage, sheet.unit.locations[location].armor);
      const structureDamage =
        sheet.unit.locations[location].structureDamage +
        Math.max(0, baseArmorDamage - sheet.unit.locations[location].armor);
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
    repairArmor: (
      location: keyof IBattleMechLocations<object>,
      sheet: IActiveBattleMechSheet,
    ): IActiveBattleMechSheet => {
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              armorDamage: Math.max(0, sheet.unit.locations[location].armorDamage - 1),
            },
          },
        },
      };
    },
    hitRearArmor: (
      location: keyof Pick<IBattleMechLocations<object>, eLocations>,
      damage: number,
      sheet: IActiveBattleMechSheet,
    ): IActiveBattleMechSheet => {
      const baseRearArmorDamage = (sheet.unit.locations[location].rearArmorDamage ?? 0) + damage;
      const rearArmorDamage = Math.min(baseRearArmorDamage, sheet.unit.locations[location].rearArmor ?? 0);
      const structureDamage =
        sheet.unit.locations[location].structureDamage +
        Math.max(0, baseRearArmorDamage - (sheet.unit.locations[location].rearArmor ?? 0));
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
    repairRearArmor: (location: keyof IBattleMechLocations<object>, sheet: IActiveBattleMechSheet) => {
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              rearArmorDamage: Math.max(0, (sheet.unit.locations[location].rearArmorDamage ?? 0) - 1),
            },
          },
        },
      };
    },
    hitStructure: (
      location: keyof IBattleMechLocations<object>,
      damage: number,
      sheet: IActiveBattleMechSheet,
    ): IActiveBattleMechSheet => {
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
    repairStructure: (location: keyof IBattleMechLocations<object>, sheet: IActiveBattleMechSheet) => {
      return {
        ...sheet,
        unit: {
          ...sheet.unit,
          locations: {
            ...sheet.unit.locations,
            [location]: {
              ...sheet.unit.locations[location],
              structureDamage: Math.max(0, sheet.unit.locations[location].structureDamage - 1),
            },
          },
        },
      };
    },
    // Crit Slot being hit is 1 based because that's how it is.
    crit: (
      location: keyof IBattleMechLocations<IBattleMechLocationActiveSheet>,
      baseCritSlot: number,
      sheet: IActiveBattleMechSheet,
    ): IActiveBattleMechSheet => {
      const workingSheet = JSON.parse(JSON.stringify(sheet)) as IActiveBattleMechSheet;
      const critSlot = baseCritSlot - 1;
      const critSlots = getCritSlots(workingSheet, location);
      const foundHit = critSlots[critSlot].hits.find((hit) => hit.location === location && hit.slot === baseCritSlot);
      if (foundHit) {
        critSlots[critSlot].hits.splice(critSlots[critSlot].hits.indexOf(foundHit), 1);
      } else {
        critSlots[critSlot].hits.push({ location, slot: baseCritSlot });
      }

      return workingSheet;
    },
  },
};

const doWeirdInitialCritSlotsForEngine = (
  sheet: IActiveBattleMechSheet,
  location: keyof IBattleMechLocations<object>,
) => {
  if (
    location === eLocations.RightTorso ||
    (location === eLocations.LeftTorso &&
      sheet.unit.locations[eLocations.CenterTorso].equipment[0].name === "XL Fusion Engine")
  ) {
    const item = sheet.unit.locations[eLocations.CenterTorso].equipment[0];
    const slots = [];
    for (let i = 0; i < item.slots; i++) {
      slots.push(item);
    }
    return slots;
  } else {
    return [];
  }
};

const doWeirdEndingCritSlotsForEngine = (
  sheet: IActiveBattleMechSheet,
  location: keyof IBattleMechLocations<object>,
) => {
  if (
    location === eLocations.CenterTorso &&
    sheet.unit.locations[eLocations.CenterTorso].equipment[0].name === "XL Fusion Engine"
  ) {
    const item = sheet.unit.locations[eLocations.CenterTorso].equipment[0];
    const slots = [];
    for (let i = 0; i < item.slots; i++) {
      slots.push(item);
    }
    return slots;
  } else {
    return [];
  }
};

export const getCritSlots = (sheet: IActiveBattleMechSheet, location: keyof IBattleMechLocations<object>) => {
  const hitLocation = sheet.unit.locations[location];
  const equipment = hitLocation.equipment;
  const critSlots = doWeirdInitialCritSlotsForEngine(sheet, location);
  critSlots.push(
    ...equipment.flatMap((item) => {
      const slots = [];
      for (let i = 0; i < item.slots; i++) {
        slots.push(item);
      }
      return slots;
    }),
  );
  critSlots.push(...doWeirdEndingCritSlotsForEngine(sheet, location));
  return critSlots;
};
