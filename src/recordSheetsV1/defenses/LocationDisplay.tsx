import { Box, Button } from "@mui/material";
import { eIncomingFireDirection } from "../data/eIncomingFireDirection";
import { HitLocationFromDirection } from "../data/HitLocationFromDirection";
import { useState } from "react";
import { IActiveBattleMechSheet } from "../data/ActiveSheets";
import { LocationDialog } from "./LocationDialog";
import { ShortLocationNames } from "../data/eLocations";
import { getCritSlots } from "../data/Actions";

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

  const toHitLocation = HitLocationFromDirection[ifd][location].join(",");

  const shortenedLocation = ShortLocationNames[location];

  const critSlots = getCritSlots(sheet, location);
  const slotCount = critSlots.length;
  const slotsDamaged = critSlots.filter((t) =>
    t.hits.find((h) => h.location === location)
  ).length;

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant={"outlined"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={1}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Box>{toHitLocation}</Box>
          <Box>
            {shortenedLocation} {unitLocation.armor - unitLocation.armorDamage}/
            {!!unitLocation.rearArmor && (
              <>
                {unitLocation.rearArmor - (unitLocation.rearArmorDamage ?? 0)}/
              </>
            )}
            {unitLocation.structure - unitLocation.structureDamage} (
            {slotCount - slotsDamaged}/{slotCount})
          </Box>
        </Box>
      </Button>
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
