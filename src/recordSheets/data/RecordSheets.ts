import { eUnitType } from "./IRecordSheet";
import { AllItemNames } from "./items/database";

export interface ICharacterSheet {
  gunnery: number;
  piloting: number;
}

export interface IBattleMechLocationSheet {
  armor: number;
  rearArmor?: number;
  structure: number;
  equipment: AllItemNames[];
}
export interface IBattleMechLocations<T> {
  head: T;
  centerTorso: T;
  leftTorso: T;
  leftArm: T;
  leftLeg: T;
  rightTorso: T;
  rightArm: T;
  rightLeg: T;
}
export interface IBattleMechSheet {
  type: eUnitType.BattleMech;
  name: string;
  model: string;
  tonnage: number;

  movement: {
    walk: number;
    run: number;
    jump: number;
  };

  locations: IBattleMechLocations<IBattleMechLocationSheet>;
}

export type IUnitSheet = IBattleMechSheet;

export interface IBaseSheet<P, U> {
  character: P;
  unit: U;
}
export type IRecordBattleMechSheet = IBaseSheet<ICharacterSheet, IBattleMechSheet>;
