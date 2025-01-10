export interface IRecordSheet {
  pilotData: {
    name: string;
    callSign: string;
    gunnery: number;
    piloting: number;
  };
  vehicle: IVehicle;
}

export interface IVehicle {
  name: string;
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
  locations: Record<eLocations, ILocation>;
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
  head = "head",
  centerTorso = "centerTorso",
  leftTorso = "leftTorso",
  rightTorso = "rightTorso",
  leftArm = "leftArm",
  rightArm = "rightArm",
  leftLeg = "leftLeg",
  rightLeg = "rightLeg",
}
