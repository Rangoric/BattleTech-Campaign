import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { eLocations, IRecordSheet } from "./data/IRecordSheet";
import { eIncomingFireDirection } from "./data/eIncomingFireDirection";
import { HitLocationFromDirection } from "./data/HitLocationFromDirection";
import { useState } from "react";
import { LocationDialog } from "./LocationDialog";
import { useUnitStatus } from "./data/useUnitStatus";

export interface ILocationDisplayProps {
  unit: IRecordSheet;
  location: eLocations;
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationDisplay: React.FC<ILocationDisplayProps> = ({ unit, location, incomingFireDirection }) => {
  const ifd = incomingFireDirection ?? eIncomingFireDirection.front;
  const [open, setIsOpen] = useState(false);
  const [unitStatus] = useUnitStatus(unit.pilotData.callSign);
  const damageAtLocation = unitStatus.locations?.[location] ?? {
    armour: 0,
    rearArmour: 0,
    internalStructure: 0,
    critSlots: [],
  };
  const unitLocation = unit.vehicle.locations[location];
  return (
    <>
      <Card elevation={2}>
        <CardActionArea onClick={() => setIsOpen(true)}>
          <CardContent>
            <Typography>
              {location} ({HitLocationFromDirection[ifd][location].join(",")})
            </Typography>
            <Typography>
              A: {unitLocation.armour - damageAtLocation.armour}
              {!!unitLocation.rearArmour && <>/{unitLocation.rearArmour - damageAtLocation.rearArmour}</>}
            </Typography>
            <Typography>
              S: {unitLocation.internalStructure - damageAtLocation.internalStructure} C:{" "}
              {unitLocation.critSlots.length - damageAtLocation.critSlots.filter((t) => t.damaged).length}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <LocationDialog open={open} onClose={() => setIsOpen(false)} unit={unit} location={location} />
    </>
  );
};
