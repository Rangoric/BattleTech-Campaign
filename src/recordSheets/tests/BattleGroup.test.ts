import { BattleGroup } from "../rules";

suite("Battle Group Data Testing", () => {
  const battleGroup = BattleGroup(
    { character: "rangoric", unit: "mad5s" },
    { character: "inanna", unit: "bj2ob" },
  );
  test("Given 2 participants that exist, when creating a battle group, then we have a battle group with each participant", () => {
    expect(battleGroup.participants[0]).toBeDefined();
    expect(battleGroup.participants[1]).toBeDefined();
  });
  test("Given 2 participants that exist, when creating a battle group, then we can get the unit's tonnage", () => {
    expect(battleGroup.participants[0].unit.tonnage).toBe(75);
    expect(battleGroup.participants[1].unit.tonnage).toBe(50);
  });
});

suite("Battle Group Movement Testing", () => {
  test("Given a member of a battle group, when walking, then the participants move modifier is 1", () => {
    const battleGroup = BattleGroup(
      { character: "rangoric", unit: "mad5s" },
      { character: "inanna", unit: "bj2ob" },
    );
  });
  test("Given a member of a battle group, when running, then the participants move modifier is 2", () => {});
  test("Given a member of a battle group, when jumping, then the participants move modifier is 3", () => {});
});
