import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { useState } from "react";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ShieldIcon from "@mui/icons-material/Shield";
import { allUnits } from "./data/everything";
import { Movement } from "./Movement";
import { Weapons } from "./Weapons";

export interface IRecordSheetsProps {
  units: string[];
}

export const RecordSheets: React.FC<IRecordSheetsProps> = ({ units }) => {
  const unitsData = units.map((unit) => allUnits[unit]).filter((t) => t);

  const [value, setValue] = useState("Movement");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box padding={1}>
        {value === "Movement" && <Movement units={unitsData} />}
        {value === "Weapons" && <Weapons units={unitsData} />}
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label={"Movement"}
            value={"Movement"}
            icon={<DirectionsRunIcon />}
          />
          <BottomNavigationAction
            label={"Weapons"}
            value={"Weapons"}
            icon={<TrackChangesIcon />}
          />
          <BottomNavigationAction
            label={"Defense"}
            value={"Defense"}
            icon={<ShieldIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
