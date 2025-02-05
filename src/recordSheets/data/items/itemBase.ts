import { AllItemNames } from "./database";

export enum eEquipmentType {
  Weapon,
  Miscellaneous,
  Ammo,
  HeatSink,
}

const empty: IMiscellaneous = {
  type: eEquipmentType.Miscellaneous,
  name: "Empty",
  description: "User when an empty crit slot is needed",
  slots: 1,
};
export const Items = { Empty: empty };

export interface IEquipmentBase {
  type: eEquipmentType;
  name: AllItemNames;
  description: string;
  slots: number;
}

export interface IWeapon extends IEquipmentBase {
  type: eEquipmentType.Weapon;
  heat: number;
  damage: number;
  effects: string[];
  minRange: number;
  shortRange: number;
  mediumRange: number;
  longRange: number;
  extremeRange: number;
  ammoItems?: AllItemNames[];
  ammoUsed?: number;
}

export interface IMiscellaneous extends IEquipmentBase {
  type: eEquipmentType.Miscellaneous;
}

export interface IAmmo extends IEquipmentBase {
  type: eEquipmentType.Ammo;
  count: number;
}

export interface IHeatSink extends IEquipmentBase {
  type: eEquipmentType.HeatSink;
  rating: number;
}

export type IEquipment = IWeapon | IMiscellaneous | IAmmo | IHeatSink;
