import { TableCell, TableRow, Typography } from "@mui/material";
import { IWeaponActiveSheet } from "./data/ActiveSheets";
import { weaponColumnWidth } from "./WeaponsDisplay";

interface IWeaponDisplayProps {
  weapon: IWeaponActiveSheet;
  gunnery: number;
  gunneryGA: number;
}

export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({ weapon, gunnery, gunneryGA }) => {
  const slots = weapon.slots;
  const crits = weapon.hits.length;
  const color = crits === 0 ? "white" : crits < slots ? "yellow" : "red";
  return (
    <TableRow>
      <TableCell sx={{ padding: "4px 2px", color }}>
        <Typography variant={"body2"}>
          {weapon.name} {crits > 0 ? `(${crits}/${slots})` : ""}
        </Typography>
        <Typography variant={"caption"}>
          H: {weapon.heat} D: {weapon.damage} E: {weapon.effects.join(",")}
        </Typography>
      </TableCell>
      <TableCell sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }} align={"center"}>
        {!!weapon.minRange && weapon.minRange}
      </TableCell>
      <TableCell sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }} align={"center"}>
        {!!weapon.shortRange && weapon.shortRange} ({gunneryGA}+)
      </TableCell>
      <TableCell sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }} align={"center"}>
        {!!weapon.mediumRange && weapon.mediumRange} ({gunneryGA + 2}+)
      </TableCell>
      <TableCell sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }} align={"center"}>
        {!!weapon.longRange && weapon.longRange} ({gunneryGA + 4}+)
      </TableCell>
      {gunnery <= 2 && (
        <TableCell sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }} align={"center"}>
          {!!weapon.extremeRange && weapon.extremeRange} ({gunneryGA + 6}+)
        </TableCell>
      )}
    </TableRow>
  );
};
