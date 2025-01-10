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
  head = "H",
  centerTorso = "CT",
  leftTorso = "LT",
  rightTorso = "RT",
  leftArm = "LA",
  rightArm = "RA",
  leftLeg = "LL",
  rightLeg = "RL",
}

export enum eIncomingFireDirection {
  front = "front",
  left = "left",
  right = "right",
  rear = "rear",
}

export const HitLocationFromDirection: Record<eIncomingFireDirection, Record<eLocations, number[]>> = {
  [eIncomingFireDirection.front]: {
    [eLocations.centerTorso]: [2, 7],
    [eLocations.rightArm]: [3, 4],
    [eLocations.rightLeg]: [5],
    [eLocations.rightTorso]: [6],
    [eLocations.leftTorso]: [8],
    [eLocations.leftLeg]: [9],
    [eLocations.leftArm]: [10, 11],
    [eLocations.head]: [12],
  },
  [eIncomingFireDirection.rear]: {
    [eLocations.centerTorso]: [2, 7],
    [eLocations.rightArm]: [3, 4],
    [eLocations.rightLeg]: [5],
    [eLocations.rightTorso]: [6],
    [eLocations.leftTorso]: [8],
    [eLocations.leftLeg]: [9],
    [eLocations.leftArm]: [10, 11],
    [eLocations.head]: [12],
  },
  [eIncomingFireDirection.left]: {
    [eLocations.leftTorso]: [2, 7],
    [eLocations.leftLeg]: [3, 6],
    [eLocations.leftArm]: [4, 5],
    [eLocations.centerTorso]: [8],
    [eLocations.rightTorso]: [9],
    [eLocations.rightArm]: [10],
    [eLocations.rightLeg]: [11],
    [eLocations.head]: [12],
  },
  [eIncomingFireDirection.right]: {
    [eLocations.rightTorso]: [2, 7],
    [eLocations.rightLeg]: [3, 6],
    [eLocations.rightArm]: [4, 5],
    [eLocations.centerTorso]: [8],
    [eLocations.leftTorso]: [9],
    [eLocations.leftLeg]: [10],
    [eLocations.leftArm]: [11],
    [eLocations.head]: [12],
  },
};
