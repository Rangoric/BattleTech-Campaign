import { eEquipmentType, IWeapon } from "./itemBase";

const tag: IWeapon = {
  type: eEquipmentType.Weapon,
  name: "Tag",
  description: "A laser pointer for large missiles.",
  slots: 1,
  heat: 0,
  damage: 0,
  effects: ["Tag"],
  minRange: 0,
  shortRange: 5,
  mediumRange: 10,
  longRange: 15,
  extremeRange: 20,
};
export const helperWeapons = {
  Tag: tag,
};
