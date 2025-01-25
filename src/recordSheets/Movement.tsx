import { Box, Typography } from "@mui/material";
import { MovementDisplay } from "./MovementDisplay";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";

export interface IMovement {
  sheets: IActiveBattleMechSheet[];
}

export const Movement: React.FC<IMovement> = ({ sheets }) => {
  return (
    <>
      {sheets.map((sheet) => (
        <Box key={sheet.character.callSign}>
          <Typography>{sheet.character.callSign}</Typography>
          <MovementDisplay sheet={sheet} />
        </Box>
      ))}
    </>
  );
};
