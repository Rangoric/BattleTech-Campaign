import { eUnitType } from "./IRecordSheets";
import { AllItemNames, ItemDatabase } from "./items/database";
import { eEquipmentType } from "./items/itemBase";
import {
  IBaseSheet,
  IBattleMechLocations,
  IBattleMechLocationSheet,
  IBattleMechSheet,
  ICharacterSheet,
  IRecordBattleMechSheet,
} from "./IRecordSheets";
import { eLocations } from "./eLocations";

export interface ICharacterActiveSheet extends ICharacterSheet {
  damage: number;
}
export interface IHits {
  location: eLocations;
  slot: number;
}
export interface IEquipmentActiveSheetBase {
  type: eEquipmentType;
  name: AllItemNames;
  description: string;
  slots: number;
  hits: IHits[];
}

export interface IWeaponActiveSheet extends IEquipmentActiveSheetBase {
  type: eEquipmentType.Weapon;
  heat: number;
  damage: number;
  effects: string[];
  minRange: number;
  shortRange: number;
  mediumRange: number;
  longRange: number;
  extremeRange: number;
}

export interface IMiscellaneousActiveSheet extends IEquipmentActiveSheetBase {
  type: eEquipmentType.Miscellaneous;
}

export interface IAmmoActiveSheet extends IEquipmentActiveSheetBase {
  type: eEquipmentType.Ammo;
}

export type IEquipmentActiveSheet =
  | IWeaponActiveSheet
  | IMiscellaneousActiveSheet
  | IAmmoActiveSheet;

export interface IBattleMechLocationActiveSheet {
  armor: number;
  armorDamage: number;
  rearArmor?: number;
  rearArmorDamage?: number;
  structure: number;
  structureDamage: number;
  equipment: IEquipmentActiveSheet[];
}

export enum eMovementSpeed {
  ping = "ping",
  walk = "walk",
  run = "run",
  jump = "jump",
}

export interface IBattleMechActiveSheet {
  type: eUnitType.BattleMech;
  movement: {
    walk: number;
    run: number;
    jump: number;
    currentMovement: eMovementSpeed;
  };
  locations: IBattleMechLocations<IBattleMechLocationActiveSheet>;
}
export type IUnitActiveSheet = IBattleMechActiveSheet;
export type IActiveBattleMechSheet = IBaseSheet<
  ICharacterActiveSheet,
  IBattleMechActiveSheet
>;
export const setupCharacter = (
  character: ICharacterSheet
): ICharacterActiveSheet => {
  return {
    ...character,
    damage: 0,
  };
};

const setupEquipment = (itemName: AllItemNames): IEquipmentActiveSheet => {
  const item = ItemDatabase[itemName];
  return {
    ...item,
    // We do this because it's the easiest way to make sure we have the right type
    name: itemName,
    hits: [] as IHits[],
  };
};
export const setupLocation = (
  location: IBattleMechLocationSheet
): IBattleMechLocationActiveSheet => {
  return {
    ...location,
    armorDamage: 0,
    structureDamage: 0,
    rearArmorDamage: 0,
    equipment: location.equipment.map(setupEquipment),
  };
};
export const setupBattleMech = (
  battleMech: IBattleMechSheet
): IBattleMechActiveSheet => {
  return {
    ...battleMech,
    movement: {
      walk: battleMech.movement.walk,
      run: battleMech.movement.run,
      jump: battleMech.movement.jump,
      currentMovement: eMovementSpeed.ping,
    },
    locations: {
      [eLocations.Head]: setupLocation(battleMech.locations[eLocations.Head]),
      [eLocations.CenterTorso]: setupLocation(
        battleMech.locations[eLocations.CenterTorso]
      ),
      [eLocations.LeftTorso]: setupLocation(
        battleMech.locations[eLocations.LeftTorso]
      ),
      [eLocations.RightTorso]: setupLocation(
        battleMech.locations[eLocations.RightTorso]
      ),
      [eLocations.LeftArm]: setupLocation(
        battleMech.locations[eLocations.LeftArm]
      ),
      [eLocations.RightArm]: setupLocation(
        battleMech.locations[eLocations.RightArm]
      ),
      [eLocations.LeftLeg]: setupLocation(
        battleMech.locations[eLocations.LeftLeg]
      ),
      [eLocations.RightLeg]: setupLocation(
        battleMech.locations[eLocations.RightLeg]
      ),
    },
  };
};
export const setupRecordSheet = {
  [eUnitType.BattleMech]: (
    recordSheet: IRecordBattleMechSheet
  ): IActiveBattleMechSheet => {
    return {
      name: recordSheet.name,
      unit: setupBattleMech(recordSheet.unit),
      character: setupCharacter(recordSheet.character),
    };
  },
};
