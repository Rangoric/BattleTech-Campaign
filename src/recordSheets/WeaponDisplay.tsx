import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";
import { useUnitStatus } from "./data/useUnitStatus";
import { movementShootingModifier } from "./rules/movementShootingModifier";

export interface IWeaponDisplayProps {
  unit: IRecordSheet;
}

const columnWidth = "40px";

export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({ unit }) => {
  const [unitStatus] = useUnitStatus(unit.pilotData.callSign);
  const gunnery = unit.pilotData.gunnery + movementShootingModifier(unitStatus.movementSpeed);
  return (
    <TableContainer component={Box}>
      <Table size="small">
        <TableHead>
          <TableCell sx={{ padding: "4px 2px" }}>Weapon</TableCell>
          <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}></TableCell>
          <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
            ({gunnery})
          </TableCell>
          <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
            ({gunnery + 2})
          </TableCell>
          <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
            ({gunnery + 4})
          </TableCell>
          {unit.pilotData.gunnery <= 2 && (
            <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
              ({gunnery + 6})
            </TableCell>
          )}
        </TableHead>
        <TableBody>
          {unit.vehicle.weapons.map((weapon, index) => (
            <TableRow key={weapon.name + index}>
              <TableCell sx={{ padding: "4px 2px" }}>
                <Typography variant={"body2"}>{weapon.name}</Typography>
                <Typography variant={"caption"}>
                  H: {weapon.heat} D: {weapon.damage} E: {weapon.effects.join(",")}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
                {!!weapon.minRange && weapon.minRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
                {!!weapon.shortRange && weapon.shortRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
                {!!weapon.mediumRange && weapon.mediumRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
                {!!weapon.longRange && weapon.longRange}
              </TableCell>
              {unit.pilotData.gunnery <= 2 && (
                <TableCell sx={{ padding: "4px 2px", width: `${columnWidth}` }} align={"center"}>
                  {!!weapon.extremeRange && weapon.extremeRange}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
