import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllUnitDesignations, RecordSheetDatabase } from ".";
import { eMovementSpeed } from "./units/IUnit";

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
    setMovementMode: (state, action: PayloadAction<{ unit: AllUnitDesignations; movementMode: eMovementSpeed }>) => {
      state.units[action.payload.unit].movement.currentSpeed = action.payload.movementMode;
    },
  },
});

export const { reset, setMovementMode } = databaseSlice.actions;
