import { eLocations } from "@/recordSheetsV1/data/eLocations";
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

  locations: {
    [eLocations.Head]: {
      armor: 9,
      structure: 3,
      equipment: Equipment.equipItems("Life Support", "Sensors", "Cockpit", "Endo Steel", "Sensors", "Life Support"),
    },
    [eLocations.CenterTorso]: {
      armor: 19,
      rearArmor: 6,
      structure: 10,
      equipment: Equipment.equipItems("XL Fusion Engine", "Gyro", "C3 Slave", "Endo Steel"),
    },
    [eLocations.LeftTorso]: {
      armor: 17,
      rearArmor: 8,
      structure: 16,
      equipment: Equipment.equipItems(
        "Gauss Ammo (8)",
        "Gauss Ammo (8)",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
      ),
    },
    [eLocations.RightTorso]: {
      armor: 17,
      rearArmor: 8,
      structure: 16,
      equipment: Equipment.equipItems(
        "Small Laser",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
        "Endo Steel",
      ),
    },
    [eLocations.LeftArm]: {
      armor: 22,
      structure: 12,
      equipment: Equipment.equipItems("Shoulder", "Upper Arm Actuator", "Double Heat Sink", "Gauss Rifle"),
    },
    [eLocations.RightArm]: {
      armor: 22,
      structure: 12,
      equipment: Equipment.equipItems(
        "Shoulder",
        "Upper Arm Actuator",
        "Double Heat Sink",
        "LRM 10",
        "Artemis IV FCS",
        "LRM Ammo - Artemis IV (20)",
      ),
    },
    [eLocations.LeftLeg]: {
      armor: 18,
      structure: 16,
      equipment: Equipment.equipItems("Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"),
    },
    [eLocations.RightLeg]: {
      armor: 18,
      structure: 16,
      equipment: Equipment.equipItems("Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"),
    },
  },
};
