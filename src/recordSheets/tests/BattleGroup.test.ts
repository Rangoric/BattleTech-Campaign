import { addParticipant } from "../battleGroups/battleGroupSlice";
import { selectParticipants } from "../battleGroups/selectParticipants";
import { setMovementMode } from "../database/databaseSlice";
import { MovementRules } from "../database/rules/movementRules";
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

suite("Battle Group Movement Testing", () => {
  const store = makeStore();

  const dispatch = store.dispatch;
  dispatch(addParticipant({ character: "rangoric", unit: "mad5s" }));
  dispatch(addParticipant({ character: "inanna", unit: "bj2ob" }));

  test("Given a member of the battle group, when stationary, then the participants move modifier is 0", () => {
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.stationary);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.stationary);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[0])).toBe(0);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[1])).toBe(0);
  });
  test("Given a member of a battle group, when walking, then the participants move modifier is 1", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.walking }));
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.walking }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.walking);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.walking);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[0])).toBe(1);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[1])).toBe(1);
  });
  test("Given a member of a battle group, when running, then the participants move modifier is 2", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.running }));
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.running }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.running);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.running);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[0])).toBe(2);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[1])).toBe(2);
  });
  test("Given a member of a battle group, when jumping, then the participants move modifier is 3", () => {
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.jumping }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.jumping);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[1])).toBe(3);
  });
  test("Given a member of a battle group without a jump speed, when jumping, then the participants move modifier is undefined", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.jumping }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.jumping);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[0])).toBe(undefined);
  });
  test("Given a member of a battle group, when prone, then the participants move modifier is 2", () => {
    dispatch(setMovementMode({ unit: "mad5s", movementMode: eMovementSpeed.prone }));
    dispatch(setMovementMode({ unit: "bj2ob", movementMode: eMovementSpeed.prone }));
    const battleGroup = selectParticipants(store.getState());
    expect(battleGroup[0].unit.movement.currentSpeed).toBe(eMovementSpeed.prone);
    expect(battleGroup[1].unit.movement.currentSpeed).toBe(eMovementSpeed.prone);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[0])).toBe(2);
    expect(MovementRules.AttackerMovementGATORModifier(battleGroup[1])).toBe(2);
  });
});
