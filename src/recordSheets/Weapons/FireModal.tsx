import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  IActiveBattleMechSheet,
  IWeaponActiveSheet,
} from "../data/ActiveSheets";
import {
  getAllAmmoByName,
  IAmmoWithLocation,
} from "../data/getAllItemsWithName";
import { useMemo, useState } from "react";
import { Actions } from "../data/Actions";

interface IFireModalProps {
  weapon: IWeaponActiveSheet;
  showModal: boolean;
  setShowModal: (x: boolean) => void;

  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
}

export const FireModal: React.FC<IFireModalProps> = ({
  weapon,
  showModal,
  setShowModal,
  sheet,
  state,
}) => {
  const hasAmmo = weapon.ammoItems && weapon.ammoUsed;
  const findAmmo = useMemo(
    () => getAllAmmoByName(sheet, weapon.ammoItems),
    [sheet, weapon.ammoItems]
  );
  const [selectedItem, setSelectedItem] = useState(findAmmo[0]);
  const onChange = (
    _: React.MouseEvent<HTMLElement>,
    nextView: IAmmoWithLocation
  ) => setSelectedItem(nextView);
  const [, setSheet] = state;

  const onFire = () => {
    if (hasAmmo) {
      const afterAmmo = Actions.BattleMech.spendAmmo(
        sheet,
        selectedItem.location,
        selectedItem.equipment,
        weapon.ammoUsed ?? 0
      );
      const afterHeat = Actions.BattleMech.gainHeat(afterAmmo, weapon.heat);
      setSheet(afterHeat);
    } else {
      const afterHeat = Actions.BattleMech.gainHeat(sheet, weapon.heat);
      setSheet(afterHeat);
    }
  };
  return (
    <Dialog onClose={() => setShowModal(false)} open={showModal}>
      <DialogTitle>Fire {weapon.name}</DialogTitle>
      <Box
        padding={1}
        width={360}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Typography>Heat: {weapon.heat}</Typography>
        <Typography>Damage: {weapon.damage}</Typography>
        <ToggleButtonGroup
          orientation={"vertical"}
          value={selectedItem}
          onChange={onChange}
        >
          {findAmmo.map((item, index) => (
            <ToggleButton value={item} key={item.equipment.name + index}>
              {item.equipment.name}{" "}
              {item.equipment.count - (item.equipment.used ?? 0)}/
              {item.equipment.count}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Button onClick={onFire}>Gain Heat / Spend Ammo</Button>
      </Box>
    </Dialog>
  );
};
