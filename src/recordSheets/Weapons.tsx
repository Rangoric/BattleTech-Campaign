import { Box, Typography } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { useUnitStatus } from "./data/useUnitStatus";
import { WeaponDisplay } from "./WeaponDisplay";

export interface IWeapons {
  units: IRecordSheet[];
}

export const Weapons: React.FC<IWeapons> = ({ units }) => {
  return (
    <Box>
      {units.map((unit) => (
        <Box key={unit.pilotData.callSign}>
          <Typography>{unit.pilotData.callSign}</Typography>
          <WeaponDisplay unit={unit} />
        </Box>
      ))}
    </Box>
  );
};
