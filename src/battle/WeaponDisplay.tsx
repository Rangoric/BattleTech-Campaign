import { IWeaponActiveSheet } from "@/recordSheets/database/equipment/ActiveSheets";

interface IWeaponDisplayProps {
  range: number;
  weapon: IWeaponActiveSheet;
  accuracyGA: number;
}
export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({ range, weapon, accuracyGA }) => {
  return <div>{range}</div>;
};
