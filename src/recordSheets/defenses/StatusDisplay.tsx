import { Box, Typography } from "@mui/material";
import { IActiveBattleMechSheet } from "../data/ActiveSheets";

interface IStatusDisplayProps {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const StatusDisplay: React.FC<IStatusDisplayProps> = ({ sheet }) => {
  const engineCrits = sheet.unit.locations["Center Torso"].equipment[0].hits.length;
  const gyroCrits = sheet.unit.locations["Center Torso"].equipment[1].hits.length;
  const sensorCrits = sheet.unit.locations["Head"].equipment.filter((e) => e.name === "Sensors").flatMap((t) => t.hits).length;
  const lifeSupportCrits = sheet.unit.locations["Head"].equipment.filter((e) => e.name === "Life Support").flatMap((t) => t.hits).length;
  return (
    <Box>
      <Typography>Engine Crits: {engineCrits}/3</Typography>
      <Typography>Gyro Crits: {gyroCrits}/2</Typography>
      <Typography>Sensor Crits: {sensorCrits}/2</Typography>
      <Typography>Life Support: {lifeSupportCrits}/1</Typography>
    </Box>
  );
};
