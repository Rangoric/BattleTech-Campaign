import { Box, Typography } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { MovementDisplay } from "./MovementDisplay";

export interface IMovement {
  units: IRecordSheet[];
}

export const Movement: React.FC<IMovement> = ({ units }) => {
  return (
    <>
      {units.map((unit) => (
        <Box key={unit.pilotData.callSign}>
          <Typography>{unit.pilotData.callSign}</Typography>
          <MovementDisplay unit={unit} />
        </Box>
      ))}
    </>
  );
};
