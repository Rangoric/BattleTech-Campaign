import { createSlice } from "@reduxjs/toolkit";
import { RecordSheetDatabase } from ".";

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
  },
});

export const { reset } = databaseSlice.actions;
