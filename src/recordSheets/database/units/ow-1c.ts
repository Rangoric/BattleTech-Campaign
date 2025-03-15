import { eLocations } from "@/recordSheets/database/units/eLocations";
import { Equipment } from "../equipment/equipmentTools";
import { eMovementSpeed, eMovementType, eUnitType, IUnit } from "./IUnit";

export const ow1c: IUnit = {
  type: eUnitType.Mech,
  name: "Owens",
  designation: "OW-1C",
  tonnage: 35,
  movement: {
    type: eMovementType.bipedal,
    currentSpeed: eMovementSpeed.stationary,
    walkSpeed: 8,
    runSpeed: 12,
  },
  heat: {
    currentHeat: 0,
    bonusHeatSinks: Equipment.equipItems(
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
      "Single Heat Sink",
    ),
  },
  locations: {
    [eLocations.Head]: {
      armor: 9,
      structure: 3,
      equipment: Equipment.equipItems("Life Support", "Sensors", "Cockpit", "Empty", "Sensors", "Life Support"),
    },
    [eLocations.CenterTorso]: {
      armor: 16,
      rearArmor: 5,
      structure: 5,
      equipment: Equipment.equipItems("XL Fusion Engine", "Gyro"),
    },
    [eLocations.LeftTorso]: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: Equipment.equipItems("Beagle Active Probe"),
    },
    [eLocations.RightTorso]: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: Equipment.equipItems("Tag", "C3 Slave"),
    },
    [eLocations.LeftArm]: {
      armor: 10,
      structure: 6,
      equipment: Equipment.equipItems("Shoulder", "Upper Arm Actuator", "Large Laser"),
    },
    [eLocations.RightArm]: {
      armor: 10,
      structure: 6,
      equipment: Equipment.equipItems("Shoulder", "Upper Arm Actuator", "Medium Laser", "Medium Laser"),
    },
    [eLocations.LeftLeg]: {
      armor: 15,
      structure: 8,
      equipment: Equipment.equipItems("Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"),
    },
    [eLocations.RightLeg]: {
      armor: 15,
      structure: 8,
      equipment: Equipment.equipItems("Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"),
    },
  },
};
