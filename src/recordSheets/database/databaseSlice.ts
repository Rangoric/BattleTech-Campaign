import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllUnitDesignations, RecordSheetDatabase } from ".";
import { eMovementMode } from "./units/IUnit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    const database = localStorage.getItem("database");
    if (database) {
      return JSON.parse(database) as typeof RecordSheetDatabase;
    }
  }
  return RecordSheetDatabase;
};

export const databaseSlice = createSlice({
  name: "database",
  initialState: getInitialState(),
  reducers: {
    reset: () => {
      return {
        ...RecordSheetDatabase,
      };
    },
    setMovementMode: (state, action: PayloadAction<{ unit: AllUnitDesignations; mode: eMovementMode }>) => {
      state.units[action.payload.unit].movement.currentMode = action.payload.mode;
    },
  },
});

export const { reset, setMovementMode } = databaseSlice.actions;
