import { eLocations } from "../eLocations";
import { eUnitType, IBattleMechSheet } from "../IRecordSheets";

export const mad5s: IBattleMechSheet = {
  type: eUnitType.BattleMech,
  name: "Marauder",
  model: "MAD-5S",
  tonnage: 75,
  movement: {
    walk: 4,
    run: 6,
    jump: 0,
  },
  heat: {
    extraHeatSinks: [
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
    ],
  },
  locations: {
    [eLocations.Head]: {
      armor: 9,
      structure: 3,
      equipment: [
        "Life Support",
        "Sensors",
        "Cockpit",
        "Empty",
        "Sensors",
        "Life Support",
      ],
    },
    [eLocations.CenterTorso]: {
      armor: 19,
      rearArmor: 6,
      structure: 10,
      equipment: ["XL Fusion Engine", "Gyro"],
    },
    [eLocations.LeftTorso]: {
      armor: 17,
      rearArmor: 8,
      structure: 16,
      equipment: ["Double Heat Sink", "Double Heat Sink", "Gauss Ammo (8)"],
    },
    [eLocations.RightTorso]: {
      armor: 17,
      rearArmor: 8,
      structure: 16,
      equipment: ["Gauss Rifle", "CASE"],
    },
    [eLocations.LeftArm]: {
      armor: 22,
      structure: 12,
      equipment: [
        "Shoulder",
        "Upper Arm Actuator",
        "Lower Arm Actuator",
        "Double Heat Sink",
        "ER PPC",
        "Medium Pulse Laser",
      ],
    },
    [eLocations.RightArm]: {
      armor: 22,
      structure: 12,
      equipment: [
        "Shoulder",
        "Upper Arm Actuator",
        "Lower Arm Actuator",
        "Double Heat Sink",
        "ER PPC",
        "Medium Pulse Laser",
      ],
    },
    [eLocations.LeftLeg]: {
      armor: 18,
      structure: 16,
      equipment: [
        "Hip",
        "Upper Leg Actuator",
        "Lower Leg Actuator",
        "Foot Actuator",
      ],
    },
    [eLocations.RightLeg]: {
      armor: 18,
      structure: 16,
      equipment: [
        "Hip",
        "Upper Leg Actuator",
        "Lower Leg Actuator",
        "Foot Actuator",
      ],
    },
  },
};
