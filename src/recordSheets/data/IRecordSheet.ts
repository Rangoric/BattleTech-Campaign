export interface IRecordSheet {
  pilotData: {
    name: string;
    callSign: string;
    gunnery: number;
    piloting: number;
  };
  vehicle: IVehicle;
}

interface IVehicleBase {
  name: string;
  type: eUnitType;
  tonnage: number;
  movement: {
    walk: number;
    run: number;
    jump: number;
  };
  weapons: IWeapon[];
  equipment: IEquipment[];
  heatSinks: {
    number: number;
    type: eHeatSinkType;
  };
}
interface IBattleMech extends IVehicleBase {
  type: eUnitType.BattleMech;
  locations: Record<eLocations, ILocation>;
}

export type IVehicle = IBattleMech;

export enum eUnitType {
  BattleMech = "BattleMech",
  BattleMechQuad = "BattleMechQuad",
  Vehicle = "Vehicle",
  BattleArmor = "BattleArmor",
  Infantry = "Infantry",
}

export enum eHeatSinkType {
  single = "single",
  double = "double",
  compact = "compact",
  laser = "laser",
  prototype = "prototype",
}

export interface IWeapon {
  name: string;
  location: string;
  heat: number;
  damage: number;
  effects: string[];
  minRange: number;
  shortRange: number;
  mediumRange: number;
  longRange: number;
  extremeRange: number;
  ammoPerShot?: number;
}

export interface IEquipment {
  name: string;
  location: string;
  range?: number;
  effects: string[];
}

export interface ILocation {
  location: eLocations;
  armour: number;
  rearArmour?: number;
  internalStructure: number;
  critSlots: CritSlot[];
}

export interface CritSlot {
  item: string;
  ammoCount?: number;
}

export enum eLocations {
  head = "H",
  centerTorso = "CT",
  leftTorso = "LT",
  rightTorso = "RT",
  leftArm = "LA",
  rightArm = "RA",
  leftLeg = "LL",
  rightLeg = "RL",
}
