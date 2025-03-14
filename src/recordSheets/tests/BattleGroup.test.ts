import { addParticipant } from "../battleGroups/battleGroupSlice";
import { selectParticipants } from "../battleGroups/selectParticipants";
import { ICharacter } from "../database/characters/ICharacter";
import { setMovementMode } from "../database/databaseSlice";
import { ItemDatabase } from "../database/equipment/database";
import { GATORRules } from "../database/rules/GATOR";
import { eMovementSpeed } from "../database/units/IUnit";
import { makeStore } from "../store";

suite("Battle Group Data Testing", () => {
  const store = makeStore();

  const dispatch = store.dispatch;
  dispatch(addParticipant({ character: "rangoric", unit: "mad5s" }));
  dispatch(addParticipant({ character: "inanna", unit: "bj2ob" }));

  test("Given 2 participants that exist, when creating a battle group, then we have a battle group with each participant", () => {
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup.length).toBe(2);
  });

  test("Given 2 participants that exist, when creating a battle group, then we can get the unit's tonnage", () => {
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.tonnage).toBe(75);
    expect(battleGroup[1].unit.tonnage).toBe(50);
  });
});

suite("GATOR rules, 'A': Attacker's Movement", () => {
  const store = makeStore();

  const dispatch = store.dispatch;
  dispatch(addParticipant({ character: "rangoric", unit: "mad5s" }));
  dispatch(addParticipant({ character: "inanna", unit: "bj2ob" }));

  test("Given a member of the battle group, when stationary, then the participants move modifier is 0", () => {
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.stationary);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.stationary);
    expect(GATORRules.A(battleGroup[0])).toBe(0);
    expect(GATORRules.A(battleGroup[1])).toBe(0);
  });
  test("Given a member of a battle group, when walking, then the participants move modifier is 1", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.walking }));
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.walking }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.walking);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.walking);
    expect(GATORRules.A(battleGroup[0])).toBe(1);
    expect(GATORRules.A(battleGroup[1])).toBe(1);
  });
  test("Given a member of a battle group, when running, then the participants move modifier is 2", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.running }));
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.running }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.running);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.running);
    expect(GATORRules.A(battleGroup[0])).toBe(2);
    expect(GATORRules.A(battleGroup[1])).toBe(2);
  });
  test("Given a member of a battle group, when jumping, then the participants move modifier is 3", () => {
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.jumping }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.jumping);
    expect(GATORRules.A(battleGroup[1])).toBe(3);
  });
  test("Given a member of a battle group, when prone, then the participants move modifier is 2", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.prone }));
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.prone }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.prone);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.prone);
    expect(GATORRules.A(battleGroup[0])).toBe(2);
    expect(GATORRules.A(battleGroup[1])).toBe(2);
  });
});

suite("GATOR Rules, G: Gunnery", () => {
  const store = makeStore();

  const dispatch = store.dispatch;
  dispatch(addParticipant({ character: "rangoric", unit: "mad5s" }));
  dispatch(addParticipant({ character: "inanna", unit: "bj2ob" }));
  dispatch(addParticipant({ character: "rundas", unit: "bj2ob" }));

  test("Given a member of a battle group, when the gunnery skill is X, then the gunnery modifier is X", () => {
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].character.gunnery).toBe(3);
    expect(battleGroup[1].character.gunnery).toBe(3);
    expect(GATORRules.G(battleGroup[0].character)).toBe(3);
    expect(GATORRules.G(battleGroup[1].character)).toBe(3);
  });

  test("Given a member of the battle group with infantry skill X, when the gunnery skill is undefined, then the gunnery modifier is X", () => {
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[2].character.gunnery).toBe(undefined);
    expect(battleGroup[2].character.infantrySkill).toBe(4);
    expect(GATORRules.G(battleGroup[2].character)).toBe(4);
  });
  test("Given a member of the battle group undefined gunnery and infantry skill, when we get the G from GATOR, then the gunnery modifier is 5 as a default", () => {
    const participant: ICharacter = {
      callSign: "WHATEVER",
      gunnery: undefined,
      infantrySkill: undefined,
      usuallyPilots: [],
    };
    expect(GATORRules.G(participant)).toBe(5);
  });
});

suite("GATOR Rules: R: Range to Target", () => {
  test("Given short range on a weapon, when we get the range modifier, then it is 0", () => {
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.R(weapon.shortRange, weapon)[0]).toBe("Short");
    expect(GATORRules.R(weapon.shortRange, weapon)[1]).toBe(0);
  });
  test("Given medium range on a weapon, when we get the range modifier, then it is 2", () => {
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.R(weapon.mediumRange, weapon)[0]).toBe("Medium");
    expect(GATORRules.R(weapon.mediumRange, weapon)[1]).toBe(2);
  });
  test("Given long range on a weapon, when we get the range modifier, then it is 4", () => {
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.R(weapon.longRange, weapon)[0]).toBe("Long");
    expect(GATORRules.R(weapon.longRange, weapon)[1]).toBe(4);
  });
  test("Given extreme range on a weapon, when we get the range modifier, then it is 6", () => {
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.R(weapon.extremeRange, weapon)[0]).toBe("Extreme");
    expect(GATORRules.R(weapon.extremeRange, weapon)[1]).toBe(6);
  });
  test("Given more than extreme range on a weapon, when we get the range modifier, then it is undefined", () => {
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.R(weapon.extremeRange + 1, weapon)[0]).toBe("Out of Range");
    expect(GATORRules.R(weapon.extremeRange + 1, weapon)[1]).toBeUndefined();
  });
});

suite("GATOR Rules: All", () => {
  const store = makeStore();

  const dispatch = store.dispatch;
  dispatch(addParticipant({ character: "rangoric", unit: "mad5s" }));
  dispatch(addParticipant({ character: "inanna", unit: "bj2ob" }));

  test("Given a participant with stationary movement and short range, when calculating GATOR, then the total modifier is correct", () => {
    const battleGroup = selectParticipants(store.getState());
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.All(battleGroup[0], weapon.shortRange, weapon)).toBe(3); // gunnery 3 + attacker's movement 0 + range 0
  });

  test("Given a participant with walking movement and medium range, when calculating GATOR, then the total modifier is correct", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.walking }));
    const battleGroup = selectParticipants(store.getState());
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.All(battleGroup[0], weapon.mediumRange, weapon)).toBe(6); // gunnery 3 + attacker's movement 1 + range 2
  });

  test("Given a participant with running movement and long range, when calculating GATOR, then the total modifier is correct", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.running }));
    const battleGroup = selectParticipants(store.getState());
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.All(battleGroup[0], weapon.longRange, weapon)).toBe(9); // gunnery 3 + attacker's movement 2 + range 4
  });

  test("Given a participant with jumping movement and extreme range, when calculating GATOR, then the total modifier is correct", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.jumping }));
    const battleGroup = selectParticipants(store.getState());
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.All(battleGroup[0], weapon.extremeRange, weapon)).toBe(12); // gunnery 3 + attacker's movement 3 + range 6
  });

  test("Given a participant with prone movement and out of range, when calculating GATOR, then the total modifier is correct", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.prone }));
    const battleGroup = selectParticipants(store.getState());
    const weapon = ItemDatabase["Medium Laser"];
    expect(GATORRules.All(battleGroup[0], weapon.extremeRange + 1, weapon)).toBe(5); // gunnery 3 + attacker's movement 2 + range undefined (0)
  });
});
