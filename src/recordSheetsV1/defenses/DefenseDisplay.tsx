import { Box, Card, CardContent, CardHeader, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { eIncomingFireDirection } from "../data/eIncomingFireDirection";
import { useState } from "react";
import { LocationsDisplay } from "./LocationsDisplay";
import { IActiveBattleMechSheet } from "../data/ActiveSheets";
import { StatusDisplay } from "./StatusDisplay";

export interface IDefenseDisplayProps {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const DefenseDisplay: React.FC<IDefenseDisplayProps> = ({ sheet, state }) => {
  const [incomingFireDirection, setIncomingFireDirection] = useState(eIncomingFireDirection.front);
  return (
    <Card elevation={1} sx={{ flexGrow: 1 }}>
      <CardHeader
        title={
          <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"space-between"}>
            {sheet.character.callSign}{" "}
            <ToggleButtonGroup value={incomingFireDirection} onChange={(_e: unknown, v: eIncomingFireDirection) => setIncomingFireDirection(v)} exclusive>
              <ToggleButton value={eIncomingFireDirection.front} color={"primary"}>
                F
              </ToggleButton>
              <ToggleButton value={eIncomingFireDirection.left} color={"secondary"}>
                L
              </ToggleButton>
              <ToggleButton value={eIncomingFireDirection.right} color={"secondary"}>
                R
              </ToggleButton>
              <ToggleButton value={eIncomingFireDirection.rear} color={"error"}>
                B
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        }
      />
      <CardContent>
        <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"center"}>
          <StatusDisplay sheet={sheet} state={state} />
          <LocationsDisplay sheet={sheet} state={state} incomingFireDirection={incomingFireDirection} />
        </Box>
      </CardContent>
    </Card>
  );
};
