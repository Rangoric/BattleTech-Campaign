import { eEquipmentType, IAmmo, IMiscellaneous, IWeapon } from "./itemBase";

const LRM10: IWeapon = {
  name: "LRM 10",
  description: "This item is an LRM 10, it fires 10 missiles with clustering and 1 damage each.",
  type: eEquipmentType.Weapon,
  slots: 2,
  heat: 4,
  damage: 1,
  effects: ["M", "C", "S"],
  minRange: 6,
  shortRange: 6,
  mediumRange: 14,
  longRange: 21,
  extremeRange: 28,
};

const artemisIVFCS: IMiscellaneous = {
  name: "Artemis IV FCS",
  description: "This item is an Artemis IV Fire Control System, it improves missile clustering.",
  type: eEquipmentType.Miscellaneous,
  slots: 1,
};

const lrmArtemisAmmo: IAmmo = {
  name: "LRM Artemis Ammo (120)",
  description: "This item is LRM Artemis ammo, it improves missile clustering.",
  type: eEquipmentType.Ammo,
  slots: 1,
  count: 120,
};

export const LRMWeapons = {
  "LRM 10": LRM10,
  "Artemis IV FCS": artemisIVFCS,
  "LRM Artemis Ammo (120)": lrmArtemisAmmo,
};
