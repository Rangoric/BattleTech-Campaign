import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { eIncomingFireDirection } from "./data/eIncomingFireDirection";
import { HitLocationFromDirection } from "./data/HitLocationFromDirection";
import { useState } from "react";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";
import { getCritSlots } from "./data/Actions";

export interface ILocationDisplayProps {
  unit: IActiveBattleMechSheet;
  location: keyof IActiveBattleMechSheet["unit"]["locations"];
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationDisplay: React.FC<ILocationDisplayProps> = ({
  unit,
  location,
  incomingFireDirection,
}) => {
  const ifd = incomingFireDirection ?? eIncomingFireDirection.front;
  const [open, setIsOpen] = useState(false);
  const unitLocation = unit.unit.locations[location];
  const critSlots = getCritSlots(unit, location);
  const slotCount = critSlots.length;
  const slotsDamaged = critSlots.filter((t) =>
    t.hits.find((h) => h.location === location)
  ).length;
  return (
    <>
      <Card elevation={2}>
        <CardActionArea onClick={() => setIsOpen(true)}>
          <CardContent>
            <Typography>
              {location} ({HitLocationFromDirection[ifd][location].join(",")})
            </Typography>
            <Typography>
              A: {unitLocation.armor - unitLocation.armorDamage}
              {!!unitLocation.rearArmor && (
                <>
                  /
                  {unitLocation.rearArmor - (unitLocation.rearArmorDamage ?? 0)}
                </>
              )}
            </Typography>
            <Typography>
              S: {unitLocation.structure - unitLocation.structureDamage} C:{" "}
              {slotCount - slotsDamaged}/{slotCount}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* <LocationDialog
        open={open}
        onClose={() => setIsOpen(false)}
        unit={unit}
        location={location}
      /> */}
    </>
  );
};
