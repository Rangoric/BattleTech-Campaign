import { Box } from "@mui/material";
import { DefenseDisplay } from "./DefenseDisplay";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";

export interface IDefensesProps {
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const Defenses: React.FC<IDefensesProps> = ({ state }) => {
  const [data] = state;
  return (
    <Box display={"flex"} flexDirection={"row"} gap={1} flexWrap={"wrap"}>
      {data.map((unit) => (
        <DefenseDisplay
          key={unit.character.callSign}
          unit={unit}
          state={state}
        />
      ))}
    </Box>
  );
};
