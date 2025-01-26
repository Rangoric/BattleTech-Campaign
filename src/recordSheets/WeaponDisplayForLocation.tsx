import { TableCell, TableRow, Typography } from "@mui/material";
import {
  IActiveBattleMechSheet,
  IBattleMechLocationActiveSheet,
} from "./data/ActiveSheets";
import { eEquipmentType } from "./data/items/itemBase";
import { weaponColumnWidth } from "./WeaponDisplay";

export interface IWeaponDisplayForLocationProps {
  location: IBattleMechLocationActiveSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
  gunnery: number;
  gunneryGA: number;
}

export const WeaponDisplayForLocation: React.FC<
  IWeaponDisplayForLocationProps
> = ({ location, state, gunnery }) => {
  const weapons = location.equipment.filter(
    (t) => t.type === eEquipmentType.Weapon
  );
  return weapons.map((weapon, index) => (
    <TableRow key={weapon.name + index}>
      <TableCell sx={{ padding: "4px 2px" }}>
        <Typography variant={"body2"}>{weapon.name}</Typography>
        <Typography variant={"caption"}>
          H: {weapon.heat} D: {weapon.damage} E: {weapon.effects.join(",")}
        </Typography>
      </TableCell>
      <TableCell
        sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
        align={"center"}
      >
        {!!weapon.minRange && weapon.minRange}
      </TableCell>
      <TableCell
        sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
        align={"center"}
      >
        {!!weapon.shortRange && weapon.shortRange}
      </TableCell>
      <TableCell
        sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
        align={"center"}
      >
        {!!weapon.mediumRange && weapon.mediumRange}
      </TableCell>
      <TableCell
        sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
        align={"center"}
      >
        {!!weapon.longRange && weapon.longRange}
      </TableCell>
      {gunnery <= 2 && (
        <TableCell
          sx={{ padding: "4px 2px", width: `${weaponColumnWidth}` }}
          align={"center"}
        >
          {!!weapon.extremeRange && weapon.extremeRange}
        </TableCell>
      )}
    </TableRow>
  ));
};
