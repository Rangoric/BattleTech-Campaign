import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { useReducer, useState } from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ShieldIcon from "@mui/icons-material/Shield";
import { allRecordSheets, AllSheetNames } from "./data/recordSheets/allRecordSheets";
import { Movement } from "./Movement";
import { Weapons } from "./Weapons";
import { getActiveSheet, getActiveSheets } from "./data/getActiveSheets";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";
import { Defenses } from "./Defenses";

export interface IRecordSheetsProps {
  units: AllSheetNames[];
}

const reducer = (state: IActiveBattleMechSheet[], action: IActiveBattleMechSheet) => {
  localStorage.setItem(action.name, JSON.stringify(action));

  return state.map((sheet) => getActiveSheet(sheet.name));
};

export const RecordSheets: React.FC<IRecordSheetsProps> = ({ units }) => {
  const unitsData = units.map((unit) => allRecordSheets[unit]).filter((t) => t);
  const activeSheets = getActiveSheets(unitsData);
  const state = useReducer(reducer, activeSheets);

  const [value, setValue] = useState("Movement");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box padding={1}>
        {value === "Movement" && <Movement state={state} />}
        {value === "Weapons" && <Weapons state={state} />}
        {value === "Defenses" && <Defenses state={state} />}
      </Box>
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label={"Movement"} value={"Movement"} icon={<DirectionsRunIcon />} />
          <BottomNavigationAction label={"Weapons"} value={"Weapons"} icon={<TrackChangesIcon />} />
          <BottomNavigationAction label={"Defenses"} value={"Defenses"} icon={<ShieldIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};
