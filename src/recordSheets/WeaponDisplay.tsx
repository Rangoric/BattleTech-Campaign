import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { movementShootingModifier } from "./rules/movementShootingModifier";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";
import { WeaponDisplayForLocation } from "./WeaponDisplayForLocation";
import { eLocations } from "./data/eLocations";

export interface IWeaponDisplayProps {
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const weaponColumnWidth = "40px";

export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({
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
            ></TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              ({gunneryGA})
            </TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              ({gunneryGA + 2})
            </TableCell>
            <TableCell
              sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
              align={"center"}
            >
              ({gunneryGA + 4})
            </TableCell>
            {gunnery <= 2 && (
              <TableCell
                sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
                align={"center"}
              >
                ({gunneryGA + 6})
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
              <WeaponDisplayForLocation
                key={location}
                location={sheet.unit.locations[location]}
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
