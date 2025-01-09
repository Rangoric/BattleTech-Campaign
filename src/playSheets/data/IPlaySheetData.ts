export interface IPlaySheetData {
  pilot: string;
  callSign: string;
  pilotData: {
    gunnery: number;
    piloting: number;
  };
  vehicle: string;
  movement: {
    walk: number;
    run: number;
    jump: number;
  };
  tonnage: number;
  weapons: IWeapon[];
  locations: Record<eLocations, ILocation>;
  heatSinks: {
    number: number;
    type: eHeatSinkType;
  };
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
