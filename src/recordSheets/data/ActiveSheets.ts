import { eUnitType } from "./IRecordSheet";
import { AllItemNames, ItemDatabase } from "./items/database";
import { IBaseSheet, IBattleMechLocations, IBattleMechLocationSheet, IBattleMechSheet, ICharacterSheet, IRecordBattleMechSheet } from "./RecordSheets";

export interface ICharacterActiveSheet extends ICharacterSheet {
  damage: number;
}
export interface IHits {
  location: string;
  slot: number;
}
export interface IEquipmentActiveSheet {
  name: AllItemNames;
  description: string;
  slots: number;
  hits: IHits[];
  ammo?: number;
  ammoSpent?: number;
}

export interface IBattleMechLocationActiveSheet {
  armor: number;
  armorDamage: number;
  rearArmor?: number;
  rearArmorDamage?: number;
  structure: number;
  structureDamage: number;
  equipment: IEquipmentActiveSheet[];
}

export interface IBattleMechActiveSheet {
  locations: IBattleMechLocations<IBattleMechLocationActiveSheet>;
}
export type IUnitActiveSheet = IBattleMechActiveSheet;
export type IActiveBattleMechSheet = IBaseSheet<ICharacterActiveSheet, IBattleMechActiveSheet>;
export const setupCharacter = (character: ICharacterSheet): ICharacterActiveSheet => {
  return {
    ...character,
    damage: 0,
  };
};

const setupEquipment = (itemName: AllItemNames): IEquipmentActiveSheet => {
  const item = ItemDatabase[itemName];
  return {
    name: itemName,
    description: item.description,
    slots: item.slots,
    hits: [],
  };
};
export const setupLocation = (location: IBattleMechLocationSheet): IBattleMechLocationActiveSheet => {
  return {
    ...location,
    armorDamage: 0,
    structureDamage: 0,
    rearArmorDamage: 0,
    equipment: location.equipment.map(setupEquipment),
  };
};
export const setupBattleMech = (battleMech: IBattleMechSheet): IBattleMechActiveSheet => {
  return {
    locations: {
      head: setupLocation(battleMech.locations.head),
      centerTorso: setupLocation(battleMech.locations.centerTorso),
      leftTorso: setupLocation(battleMech.locations.leftTorso),
      rightTorso: setupLocation(battleMech.locations.rightTorso),
      leftArm: setupLocation(battleMech.locations.leftArm),
      rightArm: setupLocation(battleMech.locations.rightArm),
      leftLeg: setupLocation(battleMech.locations.leftLeg),
      rightLeg: setupLocation(battleMech.locations.rightLeg),
    },
  };
};
export const setupRecordSheet = {
  [eUnitType.BattleMech]: (recordSheet: IRecordBattleMechSheet): IActiveBattleMechSheet => {
    return {
      unit: setupBattleMech(recordSheet.unit),
      character: setupCharacter(recordSheet.character),
    };
  },
};
