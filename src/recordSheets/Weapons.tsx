import { Box } from "@mui/material";
import { IRecordSheet } from "./data/IRecordSheet";

export interface IWeapons {
  unitData: IRecordSheet;
}

export const Weapons: React.FC<IWeapons> = () => {
  return <Box></Box>;
};
