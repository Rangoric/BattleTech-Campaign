import { suite, test, expect } from "vitest";
import { AllItemNames, ItemDatabase } from "./items/database";

interface IPilotData {
  gunnery: number;
  piloting: number;
}

enum eUnitType {
  BattleMech = "BattleMech",
  BattleMechQuad = "BattleMechQuad",
  Vehicle = "Vehicle",
  BattleArmor = "BattleArmor",
  Infantry = "Infantry",
}

interface IItem {
  name: string;
}

interface ILocation {
  armor: number;
  rearArmor?: number;
  structure: number;
  equipment: AllItemNames[];
}

interface IUnitBase {}

interface IItemStatus {
  name: AllItemNames;
  ammoSpent?: number;
  slotsHit: number[];
}

interface ILocationStatus {
  armor: number;
  armorDamage: number;
  rearArmor?: number;
  rearArmorDamage?: number;
  structure: number;
  structureDamage: number;
  equipment: IItemStatus[];
}

interface IBattleMechStatus extends IUnitStatusBase {
  type: eUnitType.BattleMech;

  name: string;
  modelNumber: string;
  tonnage: number;
  movement: {
    walk: number;
    run: number;
    jump: number;
  };
  locations: IBattleMechLocations<ILocationStatus>;
}
interface IBattleMechLocations<T> {
  head: T;
  centerTorso: T;
  leftTorso: T;
  rightTorso: T;
  leftArm: T;
  rightArm: T;
  leftLeg: T;
  rightLeg: T;
}
interface IBattleMech extends IUnitBase {
  type: eUnitType.BattleMech;

  name: string;
  modelNumber: string;
  tonnage: number;
  movement: {
    walk: number;
    run: number;
    jump: number;
  };
  locations: IBattleMechLocations<ILocation>;
}

interface IBattleMechQuad extends IUnitBase {
  type: eUnitType.BattleMechQuad;
}

interface IVehicle extends IUnitBase {
  type: eUnitType.Vehicle;
}

interface IBattleArmor extends IUnitBase {
  type: eUnitType.BattleArmor;
}

interface IInfantry extends IUnitBase {
  type: eUnitType.Infantry;
}

type IUnit = IBattleMech | IBattleMechQuad | IVehicle | IBattleArmor | IInfantry;

interface IRecordSheet<T extends IUnit> {
  pilot: IPilotData;
  unit: T;
}

interface IRecordSheetDamage<T extends IUnitDamage> {
  pilot: IPilotDamage;
  unit: T;
}

interface IPilotDamage {
  damage: number;
}

interface IUnitDamageBase {}

interface IEquipmentDamage {
  ammoSpent: number;
  slotsHit: number[];
}

interface ILocationDamage {
  armor: number;
  rearArmor?: number;
  structure: number;
  equipment: IEquipmentDamage[];
}

interface IBattleMechDamage extends IUnitDamageBase {
  locations: IBattleMechLocations<ILocationDamage>;
}

type IUnitDamage = IBattleMechDamage;

const unitBattleMechDamage: IBattleMechDamage = {
  locations: {
    head: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    centerTorso: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    leftTorso: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    rightTorso: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    leftArm: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    rightArm: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    leftLeg: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
    rightLeg: {
      armor: 0,
      structure: 0,
      equipment: [],
    },
  },
};

const unitDamage = {
  pilot: {
    damage: 0,
  },
  unit: unitBattleMechDamage,
};

const unitBattleMech: IBattleMech = {
  type: eUnitType.BattleMech,
  name: "Owens",
  modelNumber: "OW-1C",
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
      equipment: ["XL Fusion Engine", "Gyro", "XL Fusion Engine"],
    },
    leftTorso: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: ["XL Fusion Engine", "Beagle Active Probe"],
    },
    rightTorso: {
      armor: 12,
      rearArmor: 4,
      structure: 8,
      equipment: ["XL Fusion Engine", "Tag", "C3 Slave"],
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

const unitRecordSheet = {
  pilot: {
    gunnery: 4,
    piloting: 5,
  },
  unit: unitBattleMech,
};

interface IUnitStatusBase {}

type IUnitStatus = IBattleMechStatus;

interface IPilotStatus {
  gunnery: number;
  piloting: number;
  damage: number;
}

interface IRecordSheetStatus<T extends IUnitStatus> {
  pilot: IPilotStatus;
  unit: T;
}

const buildDefaultDamage = (unit: IRecordSheet<IBattleMech>): IRecordSheetDamage<IBattleMechDamage> => {
  return {
    pilot: {
      damage: 0,
    },
    unit: {
      locations: {
        head: {
          armor: 0,
          structure: 0,
          equipment: unit.unit.locations.head.equipment.map((item) => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        centerTorso: {
          armor: 0,
          rearArmor: 0,
          structure: 0,
          equipment: unit.unit.locations.centerTorso.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        leftTorso: {
          armor: 0,
          rearArmor: 0,
          structure: 0,
          equipment: unit.unit.locations.leftTorso.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        rightTorso: {
          armor: 0,
          rearArmor: 0,
          structure: 0,
          equipment: unit.unit.locations.rightTorso.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        leftArm: {
          armor: 0,
          structure: 0,
          equipment: unit.unit.locations.leftArm.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        rightArm: {
          armor: 0,
          structure: 0,
          equipment: unit.unit.locations.rightArm.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        leftLeg: {
          armor: 0,
          structure: 0,
          equipment: unit.unit.locations.leftLeg.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
        rightLeg: {
          armor: 0,
          structure: 0,
          equipment: unit.unit.locations.rightLeg.equipment.map(() => {
            return {
              ammoSpent: 0,
              slotsHit: [],
            };
          }),
        },
      },
    },
  };
};

const buildBattleMechStatus = (unit: IRecordSheet<IBattleMech>, damage: IRecordSheetDamage<IBattleMechDamage>): IRecordSheetStatus<IBattleMechStatus> => {
  return {
    pilot: {
      gunnery: unit.pilot.gunnery,
      piloting: unit.pilot.piloting,
      damage: damage.pilot.damage,
    },
    unit: {
      type: unit.unit.type,
      name: unit.unit.name,
      modelNumber: unit.unit.modelNumber,
      tonnage: unit.unit.tonnage,
      movement: unit.unit.movement,
      locations: {
        head: {
          armor: unit.unit.locations.head.armor,
          armorDamage: damage.unit.locations.head.armor,
          structure: unit.unit.locations.head.structure,
          structureDamage: damage.unit.locations.head.structure,
          equipment: unit.unit.locations.head.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.head.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.head.equipment[index].slotsHit,
            };
          }),
        },
        centerTorso: {
          armor: unit.unit.locations.centerTorso.armor,
          armorDamage: damage.unit.locations.centerTorso.armor,
          rearArmor: unit.unit.locations.centerTorso.rearArmor,
          rearArmorDamage: damage.unit.locations.centerTorso.rearArmor,
          structure: unit.unit.locations.centerTorso.structure,
          structureDamage: damage.unit.locations.centerTorso.structure,
          equipment: unit.unit.locations.centerTorso.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.centerTorso.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.centerTorso.equipment[index].slotsHit,
            };
          }),
        },
        leftTorso: {
          armor: unit.unit.locations.leftTorso.armor,
          armorDamage: damage.unit.locations.leftTorso.armor,
          rearArmor: unit.unit.locations.leftTorso.rearArmor,
          rearArmorDamage: damage.unit.locations.leftTorso.rearArmor,
          structure: unit.unit.locations.leftTorso.structure,
          structureDamage: damage.unit.locations.leftTorso.structure,
          equipment: unit.unit.locations.leftTorso.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.leftTorso.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.leftTorso.equipment[index].slotsHit,
            };
          }),
        },
        rightTorso: {
          armor: unit.unit.locations.rightTorso.armor,
          armorDamage: damage.unit.locations.rightTorso.armor,
          rearArmor: unit.unit.locations.rightTorso.rearArmor,
          rearArmorDamage: damage.unit.locations.rightTorso.rearArmor,
          structure: unit.unit.locations.rightTorso.structure,
          structureDamage: damage.unit.locations.rightTorso.structure,
          equipment: unit.unit.locations.rightTorso.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.rightTorso.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.rightTorso.equipment[index].slotsHit,
            };
          }),
        },
        leftArm: {
          armor: unit.unit.locations.leftArm.armor,
          armorDamage: damage.unit.locations.leftArm.armor,
          structure: unit.unit.locations.leftArm.structure,
          structureDamage: damage.unit.locations.leftArm.structure,
          equipment: unit.unit.locations.leftArm.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.leftArm.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.leftArm.equipment[index].slotsHit,
            };
          }),
        },
        rightArm: {
          armor: unit.unit.locations.rightArm.armor,
          armorDamage: damage.unit.locations.rightArm.armor,
          structure: unit.unit.locations.rightArm.structure,
          structureDamage: damage.unit.locations.rightArm.structure,
          equipment: unit.unit.locations.rightArm.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.rightArm.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.rightArm.equipment[index].slotsHit,
            };
          }),
        },
        leftLeg: {
          armor: unit.unit.locations.leftLeg.armor,
          armorDamage: damage.unit.locations.leftLeg.armor,
          structure: unit.unit.locations.leftLeg.structure,
          structureDamage: damage.unit.locations.leftLeg.structure,
          equipment: unit.unit.locations.leftLeg.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.leftLeg.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.leftLeg.equipment[index].slotsHit,
            };
          }),
        },
        rightLeg: {
          armor: unit.unit.locations.rightLeg.armor,
          armorDamage: damage.unit.locations.rightLeg.armor,
          structure: unit.unit.locations.rightLeg.structure,
          structureDamage: damage.unit.locations.rightLeg.structure,
          equipment: unit.unit.locations.rightLeg.equipment.map((item, index) => {
            return {
              name: item,
              ammoSpent: damage.unit.locations.rightLeg.equipment[index].ammoSpent,
              slotsHit: damage.unit.locations.rightLeg.equipment[index].slotsHit,
            };
          }),
        },
      },
    },
  };
};

interface ICritStatus {
  itemName: string;
  ammo: number;
  ammoSpent: number;
  damaged: boolean;
}

const getItemInCritSlot = (location: ILocation, index: number) => {
  const items = location.equipment.map((t) => ItemDatabase[t]);
  const mappedItems = items.flatMap((t) => {
    return Array(t.slots).fill(t);
  });
  return mappedItems[index];
};

suite("Get Crit Slot", () => {
  test("Get Item in Crit Slot", () => {
    const location: ILocation = {
      armor: 0,
      structure: 0,
      equipment: ["Beagle Active Probe", "XL Fusion Engine", "Gyro", "XL Fusion Engine"],
    };
    const itemAtLocation0 = getItemInCritSlot(location, 0);
    expect(itemAtLocation0.name).toBe("Beagle Active Probe");
    const itemAtLocation2 = getItemInCritSlot(location, 2);
    expect(itemAtLocation2.name).toBe("XL Fusion Engine");
    const itemAtLocation3 = getItemInCritSlot(location, 7);
    expect(itemAtLocation3.name).toBe("Gyro");
  });
});

const getCritSlot = (location: ILocation, damage: ILocationDamage, index: number) => {
  // The index is the crit slot number, NOT the index of the equipment array.
  // So we have to get the items, so we know the slots they take
  // Then we can see what is in the slot

  const item = getItemInCritSlot(location, index);

  return {
    itemName: item.name,
    ammo: "ammo" in item ? item.ammo : 0,
    ammoSpent: damage.equipment[index].ammoSpent,
    damaged: damage.equipment[index].slotsHit.length > 0,
  };
};

suite("BattleMech", () => {
  test("Hips are first in the feet", () => {
    const damage = buildDefaultDamage(unitRecordSheet);
    const status = buildBattleMechStatus(unitRecordSheet, damage);
    expect(status.unit.locations.leftLeg.equipment[0].name).toBe("Hip");
  });
});
suite("BattleMechQuad", () => {
  test("Not Yet", () => {});
});
suite("Vehicle", () => {
  test("Not Yet", () => {});
});
suite("battleArmor", () => {
  test("Not Yet", () => {});
});
suite("infantry", () => {
  test("Not Yet", () => {});
});
