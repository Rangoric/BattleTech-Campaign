import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { useUnitStatus } from "./data/useUnitStatus";
import { LocationDisplay } from "./LocationDisplay";

export interface IDefenseDisplayProps {
  unit: IRecordSheet;
}

export const DefenseDisplay: React.FC<IDefenseDisplayProps> = ({ unit }) => {
  const [unitStatus] = useUnitStatus(unit.pilotData.callSign);
  return (
    <Card elevation={1}>
      <CardHeader title={unit.pilotData.callSign} />
      <CardContent>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Box display={"flex"} flexDirection={"row"} gap={1}>
            <LocationDisplay location={unit.vehicle.locations.leftArm} unitStatus={unitStatus} />
            <LocationDisplay location={unit.vehicle.locations.leftTorso} unitStatus={unitStatus} />
            <LocationDisplay location={unit.vehicle.locations.centerTorso} unitStatus={unitStatus} />
            <LocationDisplay location={unit.vehicle.locations.rightTorso} unitStatus={unitStatus} />
            <LocationDisplay location={unit.vehicle.locations.rightArm} unitStatus={unitStatus} />
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={1}>
            <LocationDisplay location={unit.vehicle.locations.leftLeg} unitStatus={unitStatus} />
            <LocationDisplay location={unit.vehicle.locations.rightLeg} unitStatus={unitStatus} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
