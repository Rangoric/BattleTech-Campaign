import { Box } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { DefenseDisplay } from "./DefenseDisplay";

export interface IDefensesProps {
  units: IRecordSheet[];
}

export const Defenses: React.FC<IDefensesProps> = ({ units }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} gap={1} flexWrap={"wrap"}>
      {units.map((unit) => (
        <DefenseDisplay key={unit.pilotData.callSign} unit={unit} />
      ))}
    </Box>
  );
};
