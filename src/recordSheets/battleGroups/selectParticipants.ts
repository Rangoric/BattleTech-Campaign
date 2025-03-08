import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { IBattleGroupParticipant } from "./IBattleGroupParticipant";

export const selectParticipants = createSelector(
  [
    (state: AppState) => state.battleGroup.participants,
    (state: AppState) => state.database.characters,
    (state: AppState) => state.database.units,
  ],
  (participants, characters, units): IBattleGroupParticipant[] => {
    return participants.map((participant) => {
      return {
        keys: participant,
        character: characters[participant.character],
        unit: units[participant.unit],
      };
    });
  },
);
