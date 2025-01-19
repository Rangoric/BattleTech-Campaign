import { Box, Typography } from "@mui/material";
import { eIncomingFireDirection, eLocations, eVehicleType, IRecordSheet } from "./data/IRecordSheet";
import { LocationDisplay } from "./LocationDisplay";

export interface ILocationsDisplayProps {
  unit: IRecordSheet;
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationsDisplay: React.FC<ILocationsDisplayProps> = ({ unit, incomingFireDirection }) => {
  switch (unit.vehicle.type) {
    case eVehicleType.battlemech:
      return <BattleMechLocationsDisplay unit={unit} incomingFireDirection={incomingFireDirection} />;
    default:
      return <Typography>Unsupported Defense Setup</Typography>;
  }
};

const BattleMechLocationsDisplay: React.FC<ILocationsDisplayProps> = ({ unit, incomingFireDirection }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"center"}>
        <LocationDisplay unit={unit} location={eLocations.leftArm} incomingFireDirection={incomingFireDirection} />
        <LocationDisplay unit={unit} location={eLocations.head} incomingFireDirection={incomingFireDirection} />
        <LocationDisplay unit={unit} location={eLocations.rightArm} incomingFireDirection={incomingFireDirection} />
      </Box>
      <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"center"}>
        <LocationDisplay unit={unit} location={eLocations.leftTorso} incomingFireDirection={incomingFireDirection} />
        <LocationDisplay unit={unit} location={eLocations.centerTorso} incomingFireDirection={incomingFireDirection} />
        <LocationDisplay unit={unit} location={eLocations.rightTorso} incomingFireDirection={incomingFireDirection} />
      </Box>
      <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"center"}>
        <LocationDisplay unit={unit} location={eLocations.leftLeg} incomingFireDirection={incomingFireDirection} />
        <LocationDisplay unit={unit} location={eLocations.rightLeg} incomingFireDirection={incomingFireDirection} />
      </Box>
    </Box>
  );
};
