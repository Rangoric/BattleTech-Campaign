import { IActiveBattleMechSheet, setupRecordSheet } from "./ActiveSheets";
import { IRecordBattleMechSheet } from "./IRecordSheets";

export const useActiveSheets = (sheets: IRecordBattleMechSheet[]): IActiveBattleMechSheet[] => {
  return sheets.map(useActiveSheet);
};

export const useActiveSheet = (sheet: IRecordBattleMechSheet): IActiveBattleMechSheet => {
  const name = sheet.name;
  let localStorageSheet = localStorage.getItem(name);
  if (!localStorageSheet) {
    const newActiveSheet = setupRecordSheet.BattleMech(sheet);
    localStorage.setItem(name, JSON.stringify(newActiveSheet));
    localStorageSheet = localStorage.getItem(name);
  }
  return JSON.parse(localStorageSheet ?? "{}") as IActiveBattleMechSheet;
};
