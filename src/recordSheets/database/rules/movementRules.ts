import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { eMovementMode } from "../units/IUnit";

export const MovementRules = {
  AttackerMovementGATORModifier: (battleGroupParticipant: IBattleGroupParticipant) => {
    switch (battleGroupParticipant.unit.movement.currentMode) {
      case eMovementMode.stationary:
        return 0;
      case eMovementMode.walking:
        return 1;
      case eMovementMode.running:
        return 2;
      case eMovementMode.jumping:
        if (battleGroupParticipant.unit.movement.jumpSpeed === undefined) {
          return undefined;
        }
        return 3;
      case eMovementMode.prone:
        return 2;
    }
  },
};
