import { IPlaySheetStatus } from "./IPlaySheetStatus";

export const useUnitStatus = (
  unit: string
): [IPlaySheetStatus, (x: IPlaySheetStatus) => void] => {
  const localStorage =
    typeof window === "undefined" ? null : window.localStorage;
  const unitStatusString = localStorage?.getItem(unit) ?? "{}";
  const unitStatus = JSON.parse(unitStatusString) as IPlaySheetStatus;
  const setUnitStatus = (status: IPlaySheetStatus) => {
    localStorage?.setItem(unit, JSON.stringify(status));
  };
  return [unitStatus, setUnitStatus] as const;
};
