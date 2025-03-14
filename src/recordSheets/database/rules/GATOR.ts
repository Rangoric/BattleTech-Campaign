import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { eMovementSpeed } from "../units/IUnit";
import { IWeapon } from "../equipment/itemBase";
import { ICharacter } from "../characters/ICharacter";

// GATOR:
// - G -> Gunnery of Firing Character
// - A -> Attacker's Movement Modifier
// - T -> Target's Movement Modifier
// - O -> Obstructions
// - R -> Range to Target
export const GATORRules = {
  G: (participant: ICharacter) => {
    // When they don't have gunnery, infantry skill covers it
    return participant.gunnery ?? participant.infantrySkill ?? 5;
  },
  A: (participant: IBattleGroupParticipant) => {
    switch (participant.unit.movement.currentSpeed) {
      case eMovementSpeed.stationary:
        return 0;
      case eMovementSpeed.walking:
        return 1;
      case eMovementSpeed.running:
        return 2;
      case eMovementSpeed.jumping:
        return 3;
      case eMovementSpeed.prone:
        return 2;
    }
  },
  R: (range: number, weapon: IWeapon): [string, number | undefined] => {
    switch (true) {
      case range <= weapon.shortRange:
        return ["Short", 0];
      case range <= weapon.mediumRange:
        return ["Medium", 2];
      case range <= weapon.longRange:
        return ["Long", 4];
      case range <= weapon.extremeRange:
        return ["Extreme", 6];
      default:
        return ["Out of Range", undefined]; // Out of range
    }
  },
  All: (participant: IBattleGroupParticipant, range: number, weapon: IWeapon): number => {
    const g = GATORRules.G(participant.character);
    const a = GATORRules.A(participant);
    const r = GATORRules.R(range, weapon);
    return g + a + (r[1] ?? 0);
  },
};
