import {
  IActiveBattleMechSheet,
  IBattleMechLocationActiveSheet,
} from "../data/ActiveSheets";
import { eEquipmentType } from "../data/items/itemBase";
import { WeaponDisplay } from "./WeaponDisplay";

export interface IWeaponDisplayForLocationProps {
  location: IBattleMechLocationActiveSheet;
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
  gunnery: number;
  gunneryGA: number;
}

export const WeaponsDisplayForLocation: React.FC<
  IWeaponDisplayForLocationProps
> = ({ location, gunnery, gunneryGA, sheet, state }) => {
  const weapons = location.equipment.filter(
    (t) => t.type === eEquipmentType.Weapon
  );
  return weapons.map((weapon, index) => (
    <WeaponDisplay
      key={index}
      weapon={weapon}
      gunnery={gunnery}
      gunneryGA={gunneryGA}
      sheet={sheet}
      state={state}
    />
  ));
};
