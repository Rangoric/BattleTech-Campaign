import { Box } from "@mui/material";
import { IPlaySheetData } from "./data/IPlaySheetData";

export interface IWeapons {
  unitData: IPlaySheetData;
}

export const Weapons: React.FC<IWeapons> = () => {
  return <Box></Box>;
};
