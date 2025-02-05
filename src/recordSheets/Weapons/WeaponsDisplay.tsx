import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { movementShootingModifier } from "../rules/movementShootingModifier";
import { IActiveBattleMechSheet } from "../data/ActiveSheets";
import { WeaponsDisplayForLocation } from "./WeaponsDisplayForLocation";
import { eLocations } from "../data/eLocations";

export interface IWeaponDisplayProps {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const weaponColumnWidth = "40px";

export const WeaponsDisplay: React.FC<IWeaponDisplayProps> = ({
  sheet,
  state,
}) => {
  const gunnery = sheet.character.gunnery;
  const gunneryGA =
    sheet.character.gunnery +
    movementShootingModifier(sheet.unit.movement.currentMovement);
  return (
    <Box key={sheet.character.callSign}>
      <Typography>{sheet.character.callSign}</Typography>

      <TableContainer component={Box}>
        <Table size="small">
          <TableHead>
            <TableCell sx={{ padding: "4px 2px" }}>Weapon</TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              Min
            </TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              S
            </TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              M
            </TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              L
            </TableCell>
            {gunnery <= 2 && (
              <TableCell
                sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
                align={"center"}
              >
                E
              </TableCell>
            )}
          </TableHead>
          <TableBody>
            {[
              eLocations.Head,
              eLocations.CenterTorso,
              eLocations.LeftTorso,
              eLocations.RightTorso,
              eLocations.LeftArm,
              eLocations.RightArm,
              eLocations.LeftLeg,
              eLocations.RightLeg,
            ].map((location) => (
              <WeaponsDisplayForLocation
                key={location}
                location={sheet.unit.locations[location]}
                sheet={sheet}
                state={state}
                gunnery={gunnery}
                gunneryGA={gunneryGA}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
