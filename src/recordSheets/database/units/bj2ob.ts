import { eMovementMode, eUnitType, IUnit } from "./IUnit";

export const bj2ob: IUnit = {
  type: eUnitType.Mech,
  designation: "BJ2-OB",
  tonnage: 50,
  movement: {
    currentMode: eMovementMode.stationary,
    walkSpeed: 4,
    runSpeed: 6,
    jumpSpeed: 4,
  },
};
