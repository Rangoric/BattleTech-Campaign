import { ICharacter } from "../database/characters/ICharacter";
import { IUnit } from "../database/units/IUnit";
import { IParticipant } from "./battleGroupSlice";

export interface IBattleGroupParticipant {
  keys: IParticipant;
  character: ICharacter;
  unit: IUnit;
}
