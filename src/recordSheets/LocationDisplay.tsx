import { Card, CardContent, Typography } from "@mui/material";
import { eIncomingFireDirection, HitLocationFromDirection, ILocation } from "./data/IRecordSheet";
import { IUnitStatus } from "./data/IUnitStatus";

export interface ILocationDisplayProps {
  location: ILocation;
  unitStatus: IUnitStatus;
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationDisplay: React.FC<ILocationDisplayProps> = ({ location, incomingFireDirection }) => {
  const ifd = incomingFireDirection ?? eIncomingFireDirection.front;
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography>
          {location.location} ({HitLocationFromDirection[ifd][location.location].join(",")})
        </Typography>
        <Typography>
          A: {location.armour}
          {!!location.rearArmour && <>/{location.rearArmour}</>}
        </Typography>
        <Typography>
          S: {location.internalStructure} C: {location.critSlots.length}
        </Typography>
      </CardContent>
    </Card>
  );
};
