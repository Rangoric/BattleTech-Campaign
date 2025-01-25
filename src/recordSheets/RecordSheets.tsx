import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { useState } from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ShieldIcon from "@mui/icons-material/Shield";
import { allRecordSheets } from "./data/recordSheets/allRecordSheets";
import { Movement } from "./Movement";
import { Weapons } from "./Weapons";
import { Defenses } from "./Defenses";
import { useActiveSheets } from "./data/useActiveSheets";

export interface IRecordSheetsProps {
  units: string[];
}

export const RecordSheets: React.FC<IRecordSheetsProps> = ({ units }) => {
  const unitsData = units.map((unit) => allRecordSheets[unit]).filter((t) => t);
  const activeSheets = useActiveSheets(unitsData);

  const [value, setValue] = useState("Movement");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box padding={1}>
        {value === "Movement" && <Movement sheets={activeSheets} />}
        {value === "Weapons" && <Weapons units={unitsData} />}
        {value === "Defenses" && <Defenses units={unitsData} />}
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
