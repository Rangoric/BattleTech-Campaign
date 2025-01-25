import { AllItemNames } from "./database";

export enum eEquipmentType {
  Weapon,
  Miscellaneous,
  Ammo,
}

const empty: IMiscellaneous = { type: eEquipmentType.Miscellaneous, name: "Empty", description: "User when an empty crit slot is needed", slots: 1 };
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
}

export interface IMiscellaneous extends IEquipmentBase {
  type: eEquipmentType.Miscellaneous;
}

export interface IAmmo extends IEquipmentBase {
  type: eEquipmentType.Ammo;
}

export type IEquipment = IWeapon | IMiscellaneous | IAmmo;
