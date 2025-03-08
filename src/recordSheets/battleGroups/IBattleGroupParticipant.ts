import { ICharacter } from "../database/characters/ICharacter";
import { IUnit } from "../database/units/IUnit";

export interface IBattleGroupParticipant {
  character: ICharacter;
  unit: IUnit;
}
