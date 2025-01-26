import { eLocations } from "./eLocations";
import { AllItemNames } from "./items/database";

export enum eUnitType {
  BattleMech = "BattleMech",
}
export interface ICharacterSheet {
  name: string;
  callSign: string;
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
  [eLocations.Head]: T;
  [eLocations.CenterTorso]: T;
  [eLocations.LeftTorso]: T;
  [eLocations.LeftArm]: T;
  [eLocations.LeftLeg]: T;
  [eLocations.RightTorso]: T;
  [eLocations.RightArm]: T;
  [eLocations.RightLeg]: T;
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
  name: string;
  character: P;
  unit: U;
}
export type IRecordBattleMechSheet = IBaseSheet<
  ICharacterSheet,
  IBattleMechSheet
>;
