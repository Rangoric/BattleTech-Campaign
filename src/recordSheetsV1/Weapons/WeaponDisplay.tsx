import { TableCell, TableRow, Typography } from "@mui/material";
import {
  IActiveBattleMechSheet,
  IWeaponActiveSheet,
} from "../data/ActiveSheets";
import { weaponColumnWidth } from "./WeaponsDisplay";
import { useState } from "react";
import { FireModal } from "./FireModal";

interface IWeaponDisplayProps {
  weapon: IWeaponActiveSheet;
  gunnery: number;
  gunneryGA: number;
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({
  weapon,
  gunnery,
  gunneryGA,
  sheet,
  state,
}) => {
  const slots = weapon.slots;
  const crits = weapon.hits.length;
  const color = crits === 0 ? "white" : "red";
  const gunneryGAW = gunneryGA + (weapon.effects.includes("PL") ? -2 : 0);
  const [showFire, setShowFire] = useState(false);
  return (
    <>
      <FireModal
        weapon={weapon}
        showModal={showFire}
        setShowModal={setShowFire}
        sheet={sheet}
        state={state}
      />
      <TableRow onClick={() => setShowFire(true)}>
        <TableCell sx={{ padding: "4px 2px", color }}>
          <Typography variant={"body2"}>
            {weapon.name} {crits > 0 ? `(${crits}/${slots})` : ""}
          </Typography>
          <Typography variant={"caption"}>
            H: {weapon.heat} D: {weapon.damage} E: {weapon.effects.join(",")}
          </Typography>
        </TableCell>
        <TableCell
          sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }}
          align={"center"}
        >
          {!!weapon.minRange && weapon.minRange}
        </TableCell>
        <TableCell
          sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }}
          align={"center"}
        >
          {!!weapon.shortRange && weapon.shortRange} ({gunneryGAW}+)
        </TableCell>
        <TableCell
          sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }}
          align={"center"}
        >
          {!!weapon.mediumRange && weapon.mediumRange} ({gunneryGAW + 2}+)
        </TableCell>
        <TableCell
          sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }}
          align={"center"}
        >
          {!!weapon.longRange && weapon.longRange} ({gunneryGAW + 4}+)
        </TableCell>
        {gunnery <= 2 && (
          <TableCell
            sx={{ padding: "4px 2px", width: `${weaponColumnWidth}`, color }}
            align={"center"}
          >
            {!!weapon.extremeRange && weapon.extremeRange} ({gunneryGAW + 6}+)
          </TableCell>
        )}
      </TableRow>
    </>
  );
};
