import {
  AllCharacterCallSigns,
  AllUnitDesignations,
  RecordSheetDatabase,
} from "../database";

export interface IParticipant {
  character: AllCharacterCallSigns;
  unit: AllUnitDesignations;
}

export interface IBattleGroup {
  participants: {
    character: (typeof RecordSheetDatabase)["characters"][AllCharacterCallSigns];
    unit: (typeof RecordSheetDatabase)["units"][AllUnitDesignations];
  }[];
}

export const BattleGroup = (...participants: IParticipant[]): IBattleGroup => {
  return {
    participants: participants.map(({ character, unit }) => {
      return {
        character: RecordSheetDatabase.characters[character],
        unit: RecordSheetDatabase.units[unit],
      };
    }),
  };
};
