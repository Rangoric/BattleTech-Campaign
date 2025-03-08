import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllCharacterCallSigns, AllUnitDesignations } from "../database";

export interface IParticipant {
  character: AllCharacterCallSigns;
  unit: AllUnitDesignations;
}

interface IInitialState {
  participants: IParticipant[];
}
const initialState: IInitialState = {
  participants: [],
};

export const battleGroupSlice = createSlice({
  name: "battleGroup",
  initialState,
  reducers: {
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

export const { addParticipant, removeParticipant } = battleGroupSlice.actions;
