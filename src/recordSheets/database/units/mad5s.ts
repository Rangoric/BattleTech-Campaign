import { eMovementMode, eUnitType, IUnit } from "./IUnit";

export const mad5s: IUnit = {
  type: eUnitType.Mech,
  designation: "MAD-5S",
  tonnage: 75,
  movement: {
    currentMode: eMovementMode.stationary,
    walkSpeed: 3,
    runSpeed: 5,
  },
};
