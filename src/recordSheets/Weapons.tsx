import { Box } from "@mui/material";
import { WeaponsDisplay } from "./WeaponsDisplay";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";

export interface IWeapons {
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const Weapons: React.FC<IWeapons> = ({ state }) => {
  const [data] = state;
  return (
    <Box>
      {data.map((unit) => (
        <WeaponsDisplay sheet={unit} state={state} key={unit.character.callSign} />
      ))}
    </Box>
  );
};
