import { BattleGroup } from "../rules";

suite("Battle Group Testing", () => {
  test("Given 2 participants that exist, when creating a battle group, then we have a battlegroup with each participant", () => {
    const battleGroup = BattleGroup(
      { character: "RANGORIC", unit: "MAD-5S" },
      { character: "INANNA", unit: "BJ2-OB" },
    );

    expect(battleGroup.participants["RANGORIC"]).toBeDefined();
    expect(battleGroup.participants["INANNA"]).toBeDefined();
  });
});
