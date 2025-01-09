import { Box, Typography } from "@mui/material";
import { allUnits } from "./data/everything";
import { useUnitStatus } from "./data/useUnitStatus";
import { Weapons } from "./Weapons";
import { Movement } from "./Movement";

interface IPlaySheetsProps {
  unit: string;
}

export const PlaySheets: React.FC<IPlaySheetsProps> = ({ unit }) => {
  const unitData = allUnits[unit];
  useUnitStatus(unit);

  if (!unitData) {
    return <>No data for unit {unit}</>;
  }

  return (
    <>
      <Box display="flex" flexDirection="row" gap={1}>
        <Typography>{unitData.callSign}</Typography>
        <Typography>{unitData.pilot}</Typography>
      </Box>
      <Typography>{unitData.vehicle}</Typography>
      <Movement unitData={unitData} />
      <Weapons unitData={unitData} />
    </>
  );
};
