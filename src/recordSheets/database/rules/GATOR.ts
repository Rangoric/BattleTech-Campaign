import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { eMovementSpeed } from "../units/IUnit";
import { IWeapon } from "../equipment/itemBase";

// GATOR:
// - G -> Gunnery of Firing Character
// - A -> Attacker's Movement Modifier
// - T -> Target's Movement Modifier
// - O -> Obstructions
// - R -> Range to Target
export const GATORRules = {
  G: (participant: IBattleGroupParticipant) => {
    // When they don't have gunnery, infantry skill covers it
    return participant.character.gunnery ?? participant.character.infantrySkill ?? 5;
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
    if (range <= weapon.shortRange) {
      return ["Short", 0];
    } else if (range <= weapon.mediumRange) {
      return ["Medium", 2];
    } else if (range <= weapon.longRange) {
      return ["Long", 4];
    } else if (range <= weapon.extremeRange) {
      return ["Extreme", 6];
    } else {
      return ["Out of Range", undefined]; // Out of range
    }
  },
};
