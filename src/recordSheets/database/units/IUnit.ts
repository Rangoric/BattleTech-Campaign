import { eLocations } from "@/recordSheetsV1/data/eLocations";
import { IEquipmentActiveSheet } from "../equipment/ActiveSheets";

export enum eUnitType {
  Mech = "Mech",
  Vehicle = "Vehicle",
  BattleArmor = "Battle Armor",
  Infantry = "Infantry",
}

export enum eMovementSpeed {
  stationary = "Stationary",
  walking = "Walking",
  running = "Running",
  jumping = "Jumping",
  prone = "Prone",
}

export enum eMovementType {
  wheeled = "Wheeled",
  hover = "Hover",
  tracked = "Tracked",
  bipedal = "Bipedal",
  quadrupedal = "Quadrupedal",
  hexapod = "Hexapod",
  vtol = "VTOL",
}

export interface IUnit {
  type: eUnitType;
  designation: string;
  tonnage: number;
  movement: {
    type: eMovementType;
    currentSpeed: eMovementSpeed;
    walkSpeed: number;
    runSpeed: number;
    jumpSpeed?: number;
  };
  heat: {
    currentHeat: number;
    bonusHeatSinks: IEquipmentActiveSheet[];
  };
  locations: {
    [eLocations.CenterTorso]?: ILocation;
    [eLocations.Head]?: ILocation;
    [eLocations.LeftArm]?: ILocation;
    [eLocations.LeftLeg]?: ILocation;
    [eLocations.LeftTorso]?: ILocation;
    [eLocations.RightArm]?: ILocation;
    [eLocations.RightLeg]?: ILocation;
    [eLocations.RightTorso]?: ILocation;
  };
}

interface ILocation {
  armor: number;
  armorDamage?: number;
  rearArmor?: number;
  rearArmorDamage?: number;
  structure: number;
  structureDamage?: number;
  equipment: IEquipmentActiveSheet[];
}
