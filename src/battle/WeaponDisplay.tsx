import { IWeaponActiveSheet } from "@/recordSheets/database/equipment/ActiveSheets";

interface IWeaponDisplayProps {
  range: number;
  weapon: IWeaponActiveSheet;
}
export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({ range, weapon }) => {
  return <div>{range}</div>;
};
