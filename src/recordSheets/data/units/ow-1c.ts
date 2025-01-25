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
    head: {
      armor: 9,
      structure: 3,
      equipment: ["Life Support", "Sensors", "Cockpit", "Empty", "Sensors", "Life Support"],
    },
    centerTorso: {
      armor: 16,
      rearArmor: 5,
      structure: 5,
      equipment: ["XL Fusion Engine", "Gyro"],
    },
    leftTorso: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: ["Beagle Active Probe"],
    },
    rightTorso: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: ["Tag", "C3 Slave"],
    },
    leftArm: {
      armor: 10,
      structure: 6,
      equipment: ["Shoulder", "Upper Arm Actuator", "Large Laser"],
    },
    rightArm: {
      armor: 10,
      structure: 6,
      equipment: ["Shoulder", "Upper Arm Actuator", "Medium Laser", "Medium Laser"],
    },
    leftLeg: {
      armor: 15,
      structure: 8,
      equipment: ["Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"],
    },
    rightLeg: {
      armor: 15,
      structure: 8,
      equipment: ["Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"],
    },
  },
};
