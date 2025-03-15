import { eLocations } from "@/recordSheetsV1/data/eLocations";
import { Equipment } from "../equipment/equipmentTools";
import { eMovementSpeed, eMovementType, eUnitType, IUnit } from "./IUnit";

export const bj2od: IUnit = {
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

  locations: {
    [eLocations.Head]: {
      armor: 9,
      structure: 3,
      equipment: Equipment.equipItems("Life Support", "Sensors", "Cockpit", "Endo Steel", "Sensors", "Life Support"),
    },
    [eLocations.CenterTorso]: {
      armor: 22,
      rearArmor: 9,
      structure: 16,
      equipment: Equipment.equipItems("XL Fusion Engine", "Gyro", "Small Laser", "Endo Steel"),
    },
    [eLocations.LeftTorso]: {
      armor: 18,
      rearArmor: 6,
      structure: 12,
      equipment: Equipment.equipItems(
        "Medium Pulse Laser",
        "Medium Laser",
        "Medium Laser",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
      ),
    },
    [eLocations.RightTorso]: {
      armor: 18,
      rearArmor: 6,
      structure: 12,
      equipment: Equipment.equipItems(
        "Double Heat Sink",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
      ),
    },
    [eLocations.LeftArm]: {
      armor: 14,
      structure: 8,
      equipment: Equipment.equipItems(
        "Shoulder",
        "Upper Arm Actuator",
        "Double Heat Sink",
        "Double Heat Sink",
        "PPC",
        "Medium Pulse Laser",
      ),
    },
    [eLocations.RightArm]: {
      armor: 14,
      structure: 8,
      equipment: Equipment.equipItems(
        "Shoulder",
        "Upper Arm Actuator",
        "Double Heat Sink",
        "Double Heat Sink",
        "Large Laser",
        "Large Laser",
      ),
    },
    [eLocations.LeftLeg]: {
      armor: 18,
      structure: 12,
      equipment: Equipment.equipItems(
        "Hip",
        "Upper Leg Actuator",
        "Lower Leg Actuator",
        "Foot Actuator",
        "Jump Jet",
        "Jump Jet",
      ),
    },
    [eLocations.RightLeg]: {
      armor: 18,
      structure: 12,
      equipment: Equipment.equipItems(
        "Hip",
        "Upper Leg Actuator",
        "Lower Leg Actuator",
        "Foot Actuator",
        "Jump Jet",
        "Jump Jet",
      ),
    },
  },
};
