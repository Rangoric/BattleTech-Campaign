import { Box } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { WeaponDisplay } from "./WeaponDisplay";

export interface IWeapons {
  units: IRecordSheet[];
}

export const Weapons: React.FC<IWeapons> = ({ units }) => {
  return (
    <Box>
      {units.map((unit) => (
        <WeaponDisplay unit={unit} key={unit.pilotData.callSign} />
      ))}
    </Box>
  );
};
