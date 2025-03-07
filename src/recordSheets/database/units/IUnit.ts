export enum eUnitType {
  Mech = "Mech",
  Vehicle = "Vehicle",
  BattleArmor = "Battle Armor",
  Infantry = "Infantry",
}

export interface IUnit {
  type: eUnitType;
  designation: string;
  tonnage: number;
}
