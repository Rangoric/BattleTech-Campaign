import { eLocations } from "@/recordSheets/database/units/eLocations";
import { Equipment } from "../equipment/equipmentTools";
import { eMovementSpeed, eMovementType, eUnitType, IUnit } from "./IUnit";

export const mad5s: IUnit = {
  type: eUnitType.Mech,
  name: "Marauder",
  designation: "MAD-5S",
  tonnage: 75,
  movement: {
    type: eMovementType.bipedal,
    currentSpeed: eMovementSpeed.stationary,
    walkSpeed: 4,
    runSpeed: 6,
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
      equipment: Equipment.equipItems("Life Support", "Sensors", "Cockpit", "Empty", "Sensors", "Life Support"),
    },
    [eLocations.CenterTorso]: {
      armor: 19,
      rearArmor: 6,
      structure: 10,
      equipment: Equipment.equipItems("XL Fusion Engine", "Gyro"),
    },
    [eLocations.LeftTorso]: {
      armor: 17,
      rearArmor: 8,
      structure: 16,
      equipment: Equipment.equipItems("Double Heat Sink", "Double Heat Sink", "Gauss Ammo (8)"),
    },
    [eLocations.RightTorso]: {
      armor: 17,
      rearArmor: 8,
      structure: 16,
      equipment: Equipment.equipItems("Gauss Rifle", "CASE"),
    },
    [eLocations.LeftArm]: {
      armor: 22,
      structure: 12,
      equipment: Equipment.equipItems(
        "Shoulder",
        "Upper Arm Actuator",
        "Lower Arm Actuator",
        "Double Heat Sink",
        "ER PPC",
        "Medium Pulse Laser",
      ),
    },
    [eLocations.RightArm]: {
      armor: 22,
      structure: 12,
      equipment: Equipment.equipItems(
        "Shoulder",
        "Upper Arm Actuator",
        "Lower Arm Actuator",
        "Double Heat Sink",
        "ER PPC",
        "Medium Pulse Laser",
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
