import { eLocations } from "../eLocations";
import { eUnitType } from "../IRecordSheets";
import { IBattleMechSheet } from "../IRecordSheets";

export const ow1c: IBattleMechSheet = {
  type: eUnitType.BattleMech,
  name: "Owens",
  model: "OW-1C",
  tonnage: 35,
  movement: {
    walk: 8,
    run: 12,
    jump: 0,
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
      armor: 16,
      rearArmor: 5,
      structure: 5,
      equipment: ["XL Fusion Engine", "Gyro"],
    },
    [eLocations.LeftTorso]: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: ["Beagle Active Probe"],
    },
    [eLocations.RightTorso]: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: ["Tag", "C3 Slave"],
    },
    [eLocations.LeftArm]: {
      armor: 10,
      structure: 6,
      equipment: ["Shoulder", "Upper Arm Actuator", "Large Laser"],
    },
    [eLocations.RightArm]: {
      armor: 10,
      structure: 6,
      equipment: [
        "Shoulder",
        "Upper Arm Actuator",
        "Medium Laser",
        "Medium Laser",
      ],
    },
    [eLocations.LeftLeg]: {
      armor: 15,
      structure: 8,
      equipment: [
        "Hip",
        "Upper Leg Actuator",
        "Lower Leg Actuator",
        "Foot Actuator",
      ],
    },
    [eLocations.RightLeg]: {
      armor: 15,
      structure: 8,
      equipment: [
        "Hip",
        "Upper Leg Actuator",
        "Lower Leg Actuator",
        "Foot Actuator",
      ],
    },
  },
};
