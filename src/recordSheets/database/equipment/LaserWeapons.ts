import { eEquipmentType, IWeapon } from "./itemBase";

const largeLaser: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "Large Laser",
  description: "This item is a large laser.",
  slots: 2,
  heat: 8,
  damage: 8,
  effects: ["DE"],
  shortRange: 5,
  mediumRange: 10,
  longRange: 15,
  extremeRange: 20,
};
const mediumLaser: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "Medium Laser",
  description: "This item is a medium laser.",
  slots: 1,
  heat: 3,
  damage: 5,
  effects: ["DE"],
  shortRange: 3,
  mediumRange: 6,
  longRange: 9,
  extremeRange: 12,
};
const smallLaser: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "Small Laser",
  description: "This item is a small laser.",
  slots: 1,
  heat: 1,
  damage: 3,
  effects: ["DE"],
  shortRange: 1,
  mediumRange: 2,
  longRange: 3,
  extremeRange: 4,
};
const erPPC: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "ER PPC",
  description: "This item is an extended range PPC.",
  slots: 3,
  heat: 15,
  damage: 10,
  effects: ["DE"],
  shortRange: 7,
  mediumRange: 14,
  longRange: 23,
  extremeRange: 20,
};
const PPC: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "PPC",
  description: "This item is a PPC.",
  slots: 3,
  heat: 10,
  damage: 10,
  effects: ["DE"],
  shortRange: 6,
  mediumRange: 12,
  longRange: 18,
  extremeRange: 24,
};

const mediumPulseLaser: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "Medium Pulse Laser",
  description: "This item is a medium pulse laser.",
  slots: 2,
  heat: 4,
  damage: 5,
  effects: ["DE", "PL"],
  shortRange: 2,
  mediumRange: 4,
  longRange: 6,
  extremeRange: 8,
};
export const LaserWeapons = {
  "Large Laser": largeLaser,
  "Medium Laser": mediumLaser,
  "Small Laser": smallLaser,
  "ER PPC": erPPC,
  PPC: PPC,
  "Medium Pulse Laser": mediumPulseLaser,
};
