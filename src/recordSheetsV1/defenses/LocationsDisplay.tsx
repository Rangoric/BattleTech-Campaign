import { Box, Typography } from "@mui/material";
import { eIncomingFireDirection } from "../data/eIncomingFireDirection";
import { LocationDisplay } from "./LocationDisplay";
import { IActiveBattleMechSheet } from "../data/ActiveSheets";
import { eUnitType } from "../data/IRecordSheets";
import { eLocations } from "../data/eLocations";

export interface ILocationsDisplayProps {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationsDisplay: React.FC<ILocationsDisplayProps> = ({ sheet, state, incomingFireDirection }) => {
  switch (sheet.unit.type) {
    case eUnitType.BattleMech:
      return <BattleMechLocationsDisplay sheet={sheet} state={state} incomingFireDirection={incomingFireDirection} />;
    default:
      return <Typography>Unsupported Defense Setup</Typography>;
  }
};

const BattleMechLocationsDisplay: React.FC<ILocationsDisplayProps> = ({ sheet, state, incomingFireDirection }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} justifyContent={"center"}>
      <LocationDisplay sheet={sheet} state={state} location={eLocations.Head} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.CenterTorso} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.LeftTorso} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.LeftArm} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.LeftLeg} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.RightTorso} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.RightArm} incomingFireDirection={incomingFireDirection} />
      <LocationDisplay sheet={sheet} state={state} location={eLocations.RightLeg} incomingFireDirection={incomingFireDirection} />
    </Box>
  );
};
