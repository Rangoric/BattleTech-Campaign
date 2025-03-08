import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCharacterCallSigns, AllUnitDesignations } from "../database";

export interface IParticipant {
  character: AllCharacterCallSigns;
  unit: AllUnitDesignations;
}

interface IInitialState {
  participants: IParticipant[];
}
const getInitialState = () => {
  if (typeof window !== "undefined") {
    const database = localStorage.getItem("battleGroup");
    if (database) {
      return JSON.parse(database) as IInitialState;
    }
  }
  return { participants: [] } as IInitialState;
};

export const battleGroupSlice = createSlice({
  name: "battleGroup",
  initialState: getInitialState(),
  reducers: {
    resetBattleGroup: (state) => {
      state.participants = [];
    },
    addParticipant: (state, action: PayloadAction<IParticipant>) => {
      state.participants.push(action.payload);
    },
    removeParticipant: (state, action: PayloadAction<IParticipant>) => {
      state.participants = state.participants.filter(
        (participant) => participant.character !== action.payload.character,
      );
    },
  },
});

export const { addParticipant, removeParticipant, resetBattleGroup } = battleGroupSlice.actions;
