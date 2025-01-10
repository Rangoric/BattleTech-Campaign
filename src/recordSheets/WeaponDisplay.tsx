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
import { IRecordSheet } from "./data/IRecordSheet";

export interface IWeaponDisplayProps {
  unit: IRecordSheet;
}

export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({ unit }) => {
  return (
    <TableContainer component={Box}>
      <Table size="small">
        <TableHead>
          <TableCell sx={{ padding: "4px 2px" }}>Weapon</TableCell>
          <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
            M
          </TableCell>
          <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
            S
          </TableCell>
          <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
            M
          </TableCell>
          <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
            L
          </TableCell>
          <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
            E
          </TableCell>
        </TableHead>
        <TableBody>
          {unit.vehicle.weapons.map((weapon) => (
            <TableRow key={weapon.name}>
              <TableCell sx={{ padding: "4px 2px" }}>
                <Typography variant={"body2"}>{weapon.name}</Typography>
                <Typography variant={"caption"}>
                  H: {weapon.heat} D: {weapon.damage} E:{" "}
                  {weapon.effects.join(",")}
                </Typography>
              </TableCell>
              <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
                {weapon.minRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
                {weapon.shortRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
                {weapon.mediumRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
                {weapon.longRange}
              </TableCell>
              <TableCell sx={{ padding: "4px 2px" }} align={"center"}>
                {weapon.extremeRange}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
