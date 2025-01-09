import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { IPlaySheetData } from "./data/IPlaySheetData";
import { useState } from "react";

export interface IMovement {
  unitData: IPlaySheetData;
}

export const Movement: React.FC<IMovement> = ({ unitData }) => {
  const [movementSpeed, setMovementSpeed] = useState("Ping");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setMovementSpeed(newAlignment);
  };
  return (
    <Box>
      <ToggleButtonGroup
        color={"primary"}
        value={movementSpeed}
        onChange={handleChange}
        exclusive
        fullWidth
      >
        <ToggleButton value={"Ping"} color={"standard"}>
          Ping
        </ToggleButton>
        <ToggleButton value={"Walk"} color={"primary"}>
          Walk {unitData.movement.walk}
        </ToggleButton>
        <ToggleButton value={"Run"} color={"warning"}>
          Run {unitData.movement.run}
        </ToggleButton>
        {!!unitData.movement.jump && (
          <ToggleButton value={"Jump"} color={"error"}>
            Jump {unitData.movement.jump}
          </ToggleButton>
        )}
      </ToggleButtonGroup>
    </Box>
  );
};
