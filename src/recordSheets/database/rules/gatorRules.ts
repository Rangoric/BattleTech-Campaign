// GATOR:
// - G -> Gunnery of Firing Character
// - A -> Attacker's Movement Modifier
// - T -> Target's Movement Modifier
// - O -> Obstructions

import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { eMovementSpeed } from "../units/IUnit";
import { IWeaponActiveSheet } from "../equipment/ActiveSheets";
import { IWeapon } from "../equipment/itemBase";

// - R -> Range to Target
export const GATORRules = {
  G: (participant: IBattleGroupParticipant) => {
    // When they don't have gunnery, infantry skill covers it
    return participant.character.gunnery ?? participant.character.infantrySkill;
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
        if (participant.unit.movement.jumpSpeed === undefined) {
          return undefined;
        }
        return 3;
      case eMovementSpeed.prone:
        return 2;
    }
  },
  R: (range: number, weapon: IWeapon) => {
    if (range <= weapon.shortRange) {
      return 0;
    } else if (range <= weapon.mediumRange) {
      return 2;
    } else if (range <= weapon.longRange) {
      return 4;
    } else if (range <= weapon.extremeRange) {
      return 6;
    } else {
      return undefined; // Out of range
    }
  },
};
