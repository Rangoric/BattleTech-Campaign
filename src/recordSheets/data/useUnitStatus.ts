import { useState } from "react";
import { IUnitStatus } from "./IUnitStatus";

export const useUnitStatus = (
  unit: string
): [IUnitStatus, (x: IUnitStatus) => void] => {
  const [, setValue] = useState(1);
  const localStorage =
    typeof window === "undefined" ? null : window.localStorage;
  const unitStatusString = localStorage?.getItem(unit) ?? "{}";
  const unitStatus = JSON.parse(unitStatusString) as IUnitStatus;
  const setUnitStatus = (status: IUnitStatus) => {
    localStorage?.setItem(unit, JSON.stringify(status));
    setValue((x) => x + 1);
  };
  return [unitStatus, setUnitStatus] as const;
};
