import { allUnits } from "./data/everything";
import { useUnitStatus } from "./data/useUnitStatus";

interface IPlaySheetsProps {
  unit: string;
}

export const PlaySheets: React.FC<IPlaySheetsProps> = ({ unit }) => {
  const unitData = allUnits[unit];
  useUnitStatus(unit);

  if (!unitData) {
    return <>No data for unit {unit}</>;
  }

  return <>{unitData.pilot}</>;
};
