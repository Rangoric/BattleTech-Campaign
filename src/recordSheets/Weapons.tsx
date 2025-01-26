import { Box } from "@mui/material";
import { WeaponDisplay } from "./WeaponDisplay";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";

export interface IWeapons {
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const Weapons: React.FC<IWeapons> = ({ state }) => {
  const [data] = state;
  return (
    <Box>
      {data.map((unit) => (
        <WeaponDisplay
          sheet={unit}
          state={state}
          key={unit.character.callSign}
        />
      ))}
    </Box>
  );
};
