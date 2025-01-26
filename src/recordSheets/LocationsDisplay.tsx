import { Box, Typography } from "@mui/material";
import { eIncomingFireDirection } from "./data/eIncomingFireDirection";
import { LocationDisplay } from "./LocationDisplay";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";
import { eUnitType } from "./data/IRecordSheets";
import { eLocations } from "./data/eLocations";

export interface ILocationsDisplayProps {
  unit: IActiveBattleMechSheet;
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationsDisplay: React.FC<ILocationsDisplayProps> = ({
  unit,
  incomingFireDirection,
}) => {
  switch (unit.unit.type) {
    case eUnitType.BattleMech:
      return (
        <BattleMechLocationsDisplay
          unit={unit}
          incomingFireDirection={incomingFireDirection}
        />
      );
    default:
      return <Typography>Unsupported Defense Setup</Typography>;
  }
};

const BattleMechLocationsDisplay: React.FC<ILocationsDisplayProps> = ({
  unit,
  incomingFireDirection,
}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={1}
        justifyContent={"center"}
      >
        <LocationDisplay
          unit={unit}
          location={eLocations.LeftArm}
          incomingFireDirection={incomingFireDirection}
        />
        <LocationDisplay
          unit={unit}
          location={eLocations.Head}
          incomingFireDirection={incomingFireDirection}
        />
        <LocationDisplay
          unit={unit}
          location={eLocations.RightArm}
          incomingFireDirection={incomingFireDirection}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={1}
        justifyContent={"center"}
      >
        <LocationDisplay
          unit={unit}
          location={eLocations.LeftTorso}
          incomingFireDirection={incomingFireDirection}
        />
        <LocationDisplay
          unit={unit}
          location={eLocations.CenterTorso}
          incomingFireDirection={incomingFireDirection}
        />
        <LocationDisplay
          unit={unit}
          location={eLocations.RightTorso}
          incomingFireDirection={incomingFireDirection}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={1}
        justifyContent={"center"}
      >
        <LocationDisplay
          unit={unit}
          location={eLocations.LeftLeg}
          incomingFireDirection={incomingFireDirection}
        />
        <LocationDisplay
          unit={unit}
          location={eLocations.RightLeg}
          incomingFireDirection={incomingFireDirection}
        />
      </Box>
    </Box>
  );
};
