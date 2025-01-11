import { eMovementSpeed } from "../rules/eMovementSpeed";
import { eLocations } from "./IRecordSheet";

export interface IUnitStatus {
  movementSpeed: eMovementSpeed;
  locations: Record<eLocations, IDamageAtLocation>;
}

export interface IDamageAtLocation {
  amour: number;
  rearArmour: number;
  internalStructure: number;
  critSlots: number[];
}
