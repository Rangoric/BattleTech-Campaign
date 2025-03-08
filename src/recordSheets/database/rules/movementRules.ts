import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { eMovementSpeed } from "../units/IUnit";

export const MovementRules = {
  AttackerMovementGATORModifier: (battleGroupParticipant: IBattleGroupParticipant) => {
    switch (battleGroupParticipant.unit.movement.currentSpeed) {
      case eMovementSpeed.stationary:
        return 0;
      case eMovementSpeed.walking:
        return 1;
      case eMovementSpeed.running:
        return 2;
      case eMovementSpeed.jumping:
        if (battleGroupParticipant.unit.movement.jumpSpeed === undefined) {
          return undefined;
        }
        return 3;
      case eMovementSpeed.prone:
        return 2;
    }
  },
};
