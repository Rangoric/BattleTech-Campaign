import { Box, Typography } from "@mui/material";
import { MovementDisplay } from "./MovementDisplay";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";

export interface IMovement {
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const Movement: React.FC<IMovement> = ({ state }) => {
  const [data] = state;
  return (
    <>
      {data.map((sheet) => (
        <Box key={sheet.character.callSign}>
          <Typography>{sheet.character.callSign}</Typography>
          <MovementDisplay sheet={sheet} state={state} />
        </Box>
      ))}
    </>
  );
};
