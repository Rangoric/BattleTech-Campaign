import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { useUnitStatus } from "./data/useUnitStatus";

export interface IMovementDisplay {
  unit: IRecordSheet;
}

export const MovementDisplay: React.FC<IMovementDisplay> = ({ unit }) => {
  const [unitStatus, setUnitStatus] = useUnitStatus(unit.pilotData.callSign);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    movementSpeed: string
  ) => {
    setUnitStatus({ ...unitStatus, movementSpeed });
  };
  return (
    <Box>
      <ToggleButtonGroup
        color={"primary"}
        value={unitStatus.movementSpeed}
        onChange={handleChange}
        exclusive
        fullWidth
      >
        <ToggleButton value={"Ping"} color={"standard"}>
          Ping
        </ToggleButton>
        <ToggleButton value={"Walk"} color={"success"}>
          Walk {unit.vehicle.movement.walk}
        </ToggleButton>
        <ToggleButton value={"Run"} color={"error"}>
          Run {unit.vehicle.movement.run}
        </ToggleButton>
        <ToggleButton
          value={"Jump"}
          color={"warning"}
          disabled={unit.vehicle.movement.jump === 0}
        >
          Jump {!!unit.vehicle.movement.jump && unit.vehicle.movement.jump}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};