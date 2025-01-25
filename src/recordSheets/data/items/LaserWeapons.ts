import { eEquipmentType, IWeapon } from "./itemBase";

const largeLaser: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "Large Laser",
  description: "This item is a large laser.",
  slots: 2,
  heat: 8,
  damage: 8,
  effects: ["DE"],
  minRange: 0,
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
  minRange: 0,
  shortRange: 3,
  mediumRange: 6,
  longRange: 9,
  extremeRange: 12,
};
export const LaserWeapons = {
  "Large Laser": largeLaser,
  "Medium Laser": mediumLaser,
};
