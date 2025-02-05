import { eEquipmentType, IAmmo, IWeapon } from "./itemBase";

const gaussRifle: IWeapon = {
  name: "Gauss Rifle",
  type: eEquipmentType.Weapon,
  description: "This item is a gauss rifle.",
  slots: 7,
  heat: 1,
  damage: 15,
  effects: ["DB", "X"],
  minRange: 2,
  shortRange: 7,
  mediumRange: 15,
  longRange: 22,
  extremeRange: 30,
  ammoItems: ["Gauss Ammo (8)"],
  ammoUsed: 1,
};
const gaussAmmo8: IAmmo = {
  name: "Gauss Ammo (8)",
  type: eEquipmentType.Ammo,
  description: "This item is gauss ammo.",
  slots: 1,
  count: 8,
};
export const gaussWeapons = {
  "Gauss Rifle": gaussRifle,
  "Gauss Ammo (8)": gaussAmmo8,
};
