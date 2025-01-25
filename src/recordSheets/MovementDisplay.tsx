import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { eMovementSpeed } from "./rules/eMovementSpeed";
import { IRecordBattleMechSheet } from "./data/IRecordSheets";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";

export interface IMovementDisplay {
  sheet: IActiveBattleMechSheet;
}

export const MovementDisplay: React.FC<IMovementDisplay> = ({ sheet }) => {
  const handleChange = (_event: React.MouseEvent<HTMLElement>, movementSpeed: eMovementSpeed) => {
    setUnitStatus({ ...unitStatus, movementSpeed });
  };
  return (
    <Box>
      <ToggleButtonGroup color={"primary"} value={unitStatus.movementSpeed} onChange={handleChange} exclusive fullWidth>
        <ToggleButton value={eMovementSpeed.ping} color={"standard"}>
          Ping
        </ToggleButton>
        <ToggleButton value={eMovementSpeed.walk} color={"success"}>
          Walk {sheet.unit.movement.walk}
        </ToggleButton>
        <ToggleButton value={eMovementSpeed.run} color={"error"}>
          Run {sheet.unit.movement.run}
        </ToggleButton>
        <ToggleButton value={eMovementSpeed.jump} color={"warning"} disabled={sheet.unit.movement.jump === 0}>
          Jump {!!sheet.unit.movement.jump && sheet.unit.movement.jump}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
