import { Card, CardActionArea, CardContent, Dialog, Modal, Typography } from "@mui/material";
import { eIncomingFireDirection, HitLocationFromDirection, ILocation } from "./data/IRecordSheet";
import { IUnitStatus } from "./data/IUnitStatus";
import { useState } from "react";
import { LocationDialog } from "./LocationDialog";

export interface ILocationDisplayProps {
  location: ILocation;
  unitStatus: IUnitStatus;
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationDisplay: React.FC<ILocationDisplayProps> = ({ location, incomingFireDirection, unitStatus }) => {
  const ifd = incomingFireDirection ?? eIncomingFireDirection.front;
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <Card elevation={2}>
        <CardActionArea onClick={() => setIsOpen(true)}>
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
        </CardActionArea>
      </Card>
      <LocationDialog open={open} onClose={() => setIsOpen(false)} location={location} unitStatus={unitStatus} />
    </>
  );
};
