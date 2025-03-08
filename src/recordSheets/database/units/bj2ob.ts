import { Equipment } from "../equipment/equipmentTools";
import { eMovementSpeed, eMovementType, eUnitType, IUnit } from "./IUnit";

export const bj2ob: IUnit = {
  type: eUnitType.Mech,
  designation: "BJ2-OB",
  tonnage: 50,
  movement: {
    type: eMovementType.bipedal,
    currentSpeed: eMovementSpeed.stationary,
    walkSpeed: 4,
    runSpeed: 6,
    jumpSpeed: 4,
  },
  heat: {
    currentHeat: 0,
    bonusHeatSinks: Equipment.equipItems(
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
      "Double Heat Sink",
    ),
  },
  locations: {},
};
