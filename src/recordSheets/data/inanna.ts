import { eHeatSinkType, eLocations, eUnitType, IRecordSheet } from "./IRecordSheet";

export const inanna: IRecordSheet = {
  pilotData: {
    name: "Ambrosia Or'lient",
    callSign: "INANNA",
    gunnery: 3,
    piloting: 5,
  },
  vehicle: {
    name: "BJ2-OB",
    type: eUnitType.BattleMech,
    movement: {
      walk: 4,
      run: 6,
      jump: 4,
    },
    tonnage: 50,
    weapons: [
      {
        name: "Gauss Rifle",
        location: "LA",
        heat: 1,
        damage: 15,
        effects: ["DB", "X"],
        minRange: 2,
        shortRange: 7,
        mediumRange: 15,
        longRange: 22,
        extremeRange: 30,
        ammoPerShot: 1,
      },
      {
        name: "LRM-10 w/Artemis",
        location: "RA",
        heat: 4,
        damage: 1,
        effects: ["M", "C", "S"],
        minRange: 6,
        shortRange: 7,
        mediumRange: 14,
        longRange: 21,
        extremeRange: 28,
        ammoPerShot: 10,
      },
      {
        name: "Small Laser",
        location: "RT",
        heat: 1,
        damage: 3,
        effects: ["DE"],
        minRange: 0,
        shortRange: 1,
        mediumRange: 2,
        longRange: 3,
        extremeRange: 4,
      },
    ],
    equipment: [
      {
        name: "C3 Slave",
        location: "CT",
        effects: ["E"],
      },
    ],
    heatSinks: {
      number: 10,
      type: eHeatSinkType.double,
    },
    locations: {
      [eLocations.head]: {
        location: eLocations.head,
        armour: 9,
        internalStructure: 3,
        critSlots: [{ item: "Life Support" }, { item: "Sensors" }, { item: "Cockpit" }, { item: "Endo Steel" }, { item: "Sensors" }, { item: "Life Support" }],
      },
      [eLocations.centerTorso]: {
        location: eLocations.centerTorso,
        armour: 22,
        rearArmour: 9,
        internalStructure: 16,
        critSlots: [
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "Gyro" },
          { item: "Gyro" },
          { item: "Gyro" },
          { item: "Gyro" },
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "C3 Slave" },
          { item: "Endo Steel" },
        ],
      },
      [eLocations.leftTorso]: {
        location: eLocations.leftTorso,
        armour: 18,
        rearArmour: 6,
        internalStructure: 12,
        critSlots: [
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "Gauss Ammo", ammoCount: 8 },
          { item: "Gauss Ammo", ammoCount: 8 },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
        ],
      },
      [eLocations.rightTorso]: {
        location: eLocations.rightTorso,
        armour: 18,
        rearArmour: 6,
        internalStructure: 12,
        critSlots: [
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "XL Fusion Engine" },
          { item: "Small Laser" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
          { item: "Endo Steel" },
        ],
      },
      [eLocations.leftArm]: {
        location: eLocations.leftArm,
        armour: 14,
        internalStructure: 8,
        critSlots: [
          { item: "Shoulder" },
          { item: "Upper Arm Actuator" },
          { item: "Double Heat Sink" },
          { item: "Double Heat Sink" },
          { item: "Double Heat Sink" },
          { item: "Gauss Rifle" },
          { item: "Gauss Rifle" },
          { item: "Gauss Rifle" },
          { item: "Gauss Rifle" },
          { item: "Gauss Rifle" },
          { item: "Gauss Rifle" },
          { item: "Gauss Rifle" },
        ],
      },
      [eLocations.rightArm]: {
        location: eLocations.rightArm,
        armour: 14,
        internalStructure: 8,
        critSlots: [
          { item: "Shoulder" },
          { item: "Upper Arm Actuator" },
          { item: "Double Heat Sink" },
          { item: "Double Heat Sink" },
          { item: "Double Heat Sink" },
          { item: "LRM-10" },
          { item: "LRM-10" },
          { item: "Artemis IV FCS" },
          { item: "LRM Ammo Artemis", ammoCount: 120 },
          { item: "LRM Ammo Artemis", ammoCount: 120 },
        ],
      },
      [eLocations.leftLeg]: {
        location: eLocations.leftLeg,
        armour: 18,
        internalStructure: 12,
        critSlots: [
          { item: "Hip" },
          { item: "Upper Leg Actuator" },
          { item: "Lower Leg Actuator" },
          { item: "Foot Actuator" },
          { item: "Jump Jet" },
          { item: "Jump Jet" },
        ],
      },
      [eLocations.rightLeg]: {
        location: eLocations.rightLeg,
        armour: 18,
        internalStructure: 12,
        critSlots: [
          { item: "Hip" },
          { item: "Upper Leg Actuator" },
          { item: "Lower Leg Actuator" },
          { item: "Foot Actuator" },
          { item: "Jump Jet" },
          { item: "Jump Jet" },
        ],
      },
    },
  },
};
