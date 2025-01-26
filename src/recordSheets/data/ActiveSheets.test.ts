import { eUnitType } from "./IRecordSheets";
import { setupRecordSheet } from "./ActiveSheets";
import { IBattleMechSheet } from "./IRecordSheets";
import { Actions } from "./Actions";
import { eLocations } from "./eLocations";

const unit: IBattleMechSheet = {
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
      equipment: ["Life Support", "Sensors", "Cockpit", "Empty", "Sensors", "Life Support"],
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
      equipment: ["Shoulder", "Upper Arm Actuator", "Medium Laser", "Medium Laser"],
    },
    [eLocations.LeftLeg]: {
      armor: 15,
      structure: 8,
      equipment: ["Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"],
    },
    [eLocations.RightLeg]: {
      armor: 15,
      structure: 8,
      equipment: ["Hip", "Upper Leg Actuator", "Lower Leg Actuator", "Foot Actuator"],
    },
  },
};

const character = {
  name: "Test",
  callSign: "TST",
  gunnery: 4,
  piloting: 5,
};

const activeSheet = setupRecordSheet.BattleMech({
  name: "some name",
  character,
  unit,
});

suite("Character", () => {
  test("Damage Starts at 0", () => {
    expect(activeSheet.character.damage).to.equal(0);
  });
  test("Gunnery and Piloting are copied over", () => {
    expect(activeSheet.character.gunnery).to.equal(character.gunnery);
    expect(activeSheet.character.piloting).to.equal(character.piloting);
  });
});

suite("Unit", () => {
  test("Head Armor Starts at 9", () => {
    expect(activeSheet.unit.locations[eLocations.Head].armor).to.equal(unit.locations[eLocations.Head].armor);
  });
  test("Head has no rear armor", () => {
    expect(activeSheet.unit.locations[eLocations.Head].rearArmor).to.equal(unit.locations[eLocations.Head].rearArmor);
    expect(activeSheet.unit.locations[eLocations.Head].rearArmor).to.equal(undefined);
  });
  test("Head Structure Starts at 3", () => {
    expect(activeSheet.unit.locations[eLocations.Head].structure).to.equal(unit.locations[eLocations.Head].structure);
  });
});

suite("Hitting", () => {
  test("Given a head attack, when we deal the damage, the head armor damage increases", () => {
    const damagedUnit = Actions.BattleMech.hitArmor(eLocations.Head, 3, activeSheet);
    expect(damagedUnit.unit.locations[eLocations.Head].armorDamage).to.equal(3);
  });
  test("Given an arm attack, when we deal the damage, the arm damage increases", () => {
    const damagedUnit = Actions.BattleMech.hitArmor(eLocations.LeftArm, 2, activeSheet);
    expect(damagedUnit.unit.locations[eLocations.LeftArm].armorDamage).to.equal(2);
  });
  test("Given an arm attack, when we deal more than the armor, the structure damage increases also.", () => {
    const damagedUnit = Actions.BattleMech.hitArmor(eLocations.LeftArm, 20, activeSheet);
    expect(damagedUnit.unit.locations[eLocations.LeftArm].armorDamage).to.equal(10);
    expect(damagedUnit.unit.locations[eLocations.LeftArm].structureDamage).to.equal(10);
  });
  test("Given an attack in the rear, when we deal damage, the rear armor damage increases", () => {
    const damagedUnit = Actions.BattleMech.hitRearArmor(eLocations.CenterTorso, 3, activeSheet);
    expect(damagedUnit.unit.locations[eLocations.CenterTorso].rearArmorDamage).to.equal(3);
  });
  test("Given an attack in the rear, when we deal more than the rear armor, the structure damage increases also", () => {
    const damagedUnit = Actions.BattleMech.hitRearArmor(eLocations.CenterTorso, 20, activeSheet);
    expect(damagedUnit.unit.locations[eLocations.CenterTorso].rearArmorDamage).to.equal(5);
    expect(damagedUnit.unit.locations[eLocations.CenterTorso].structureDamage).to.equal(15);
  });
  test("Given a hit to structure, when we deal damage, the structure damage increases", () => {
    const damagedUnit = Actions.BattleMech.hitStructure(eLocations.LeftArm, 20, activeSheet);
    expect(damagedUnit.unit.locations[eLocations.LeftArm].structureDamage).to.equal(20);
  });
});

suite("Crits", () => {
  test("Given an undamaged mech, when we deal a crit to the head at spot 1, the first item takes a crit", () => {
    const damagedUnit = Actions.BattleMech.crit(eLocations.Head, 1, activeSheet);

    expect(damagedUnit.unit.locations[eLocations.Head].equipment[0].hits[0].location).to.equal(eLocations.Head);
    expect(damagedUnit.unit.locations[eLocations.Head].equipment[0].hits[0].slot).to.equal(1);
  });
  test("Given an undamaged mech, when we deal a crit to the center torso gyro, the gyro takes the crit", () => {
    const damagedUnit = Actions.BattleMech.crit(eLocations.CenterTorso, 4, activeSheet);

    expect(damagedUnit.unit.locations[eLocations.CenterTorso].equipment[1].hits[0].location).to.equal(eLocations.CenterTorso);
    expect(damagedUnit.unit.locations[eLocations.CenterTorso].equipment[1].hits[0].slot).to.equal(4);
  });
  suite("XL Engine nonsense", () => {
    test("Given an undamaged mech, when we deal a crit to the center torso second XL engine spot, then the XL engine gets the crit", () => {
      const damagedUnit = Actions.BattleMech.crit(eLocations.CenterTorso, 8, activeSheet);

      expect(damagedUnit.unit.locations[eLocations.CenterTorso].equipment[0].hits[0].location).to.equal(eLocations.CenterTorso);
      expect(damagedUnit.unit.locations[eLocations.CenterTorso].equipment[0].hits[0].slot).to.equal(8);
    });
    test("Given a damaged mech, when we deal a crit to the right torso XL engine spot, then the XL engine gets the crit", () => {
      const damagedUnit = Actions.BattleMech.crit(eLocations.RightTorso, 1, activeSheet);

      expect(damagedUnit.unit.locations[eLocations.CenterTorso].equipment[0].hits[0].location).to.equal(eLocations.RightTorso);
      expect(damagedUnit.unit.locations[eLocations.CenterTorso].equipment[0].hits[0].slot).to.equal(1);
    });
    test("Given an undamaged mech, when we deal a crit to the left torso beagle, then the beagle gets the crit", () => {
      const damagedUnit = Actions.BattleMech.crit(eLocations.LeftTorso, 4, activeSheet);

      expect(damagedUnit.unit.locations[eLocations.LeftTorso].equipment[0].hits[0].location).to.equal(eLocations.LeftTorso);
      expect(damagedUnit.unit.locations[eLocations.LeftTorso].equipment[0].hits[0].slot).to.equal(4);
    });
  });
});
