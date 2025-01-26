import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { eIncomingFireDirection } from "./data/eIncomingFireDirection";
import { HitLocationFromDirection } from "./data/HitLocationFromDirection";
import { useState } from "react";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";
import { getCritSlots } from "./data/Actions";
import { LocationDialog } from "./LocationDialog";

export interface ILocationDisplayProps {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
  location: keyof IActiveBattleMechSheet["unit"]["locations"];
  incomingFireDirection: eIncomingFireDirection;
}

export const LocationDisplay: React.FC<ILocationDisplayProps> = ({
  sheet,
  state,
  location,
  incomingFireDirection,
}) => {
  const ifd = incomingFireDirection ?? eIncomingFireDirection.front;
  const [open, setIsOpen] = useState(false);
  const unitLocation = sheet.unit.locations[location];
  const critSlots = getCritSlots(sheet, location);
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
      <LocationDialog
        open={open}
        onClose={() => setIsOpen(false)}
        sheet={sheet}
        state={state}
        location={location}
      />
    </>
  );
};
