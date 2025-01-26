import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { eMovementSpeed, IActiveBattleMechSheet } from "./data/ActiveSheets";
import { Actions } from "./data/Actions";

export interface IMovementDisplay {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const MovementDisplay: React.FC<IMovementDisplay> = ({ sheet, state }) => {
  const [, dispatch] = state;
  const handleChange = (_event: React.MouseEvent<HTMLElement>, movementSpeed: eMovementSpeed) => {
    dispatch(Actions.BattleMech.move(sheet, movementSpeed));
  };
  return (
    <Box>
      <ToggleButtonGroup color={"primary"} value={sheet.unit.movement.currentMovement} onChange={handleChange} exclusive fullWidth>
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
