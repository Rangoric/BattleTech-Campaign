import { IActiveBattleMechSheet, setupRecordSheet } from "./ActiveSheets";
import { IRecordBattleMechSheet } from "./IRecordSheets";

export const getActiveSheets = (sheets: IRecordBattleMechSheet[]): IActiveBattleMechSheet[] => {
  return sheets.map(getActiveSheetOrDefault);
};

export const getActiveSheetOrDefault = (sheet: IRecordBattleMechSheet): IActiveBattleMechSheet => {
  const name = sheet.name;
  const localStorage = typeof window === "undefined" ? null : window.localStorage;
  if (localStorage) {
    let localStorageSheet = localStorage.getItem(name);
    if (!localStorageSheet) {
      const newActiveSheet = setupRecordSheet.BattleMech(sheet);
      localStorage?.setItem(name, JSON.stringify(newActiveSheet));
      localStorageSheet = localStorage?.getItem(name);
    }
    return JSON.parse(localStorageSheet ?? "{}") as IActiveBattleMechSheet;
  } else {
    return setupRecordSheet.BattleMech(sheet);
  }
};

export const getActiveSheet = (name: string): IActiveBattleMechSheet => {
  const localStorage = typeof window === "undefined" ? null : window.localStorage;
  const localStorageSheet = localStorage?.getItem(name);
  if (!localStorageSheet) {
    throw new Error(`No sheet found for ${name}`);
  }
  return JSON.parse(localStorageSheet) as IActiveBattleMechSheet;
};
