import { Dialog, DialogTitle, Button } from "@mui/material";
import { ILocation } from "./data/IRecordSheet";
import { IUnitStatus } from "./data/IUnitStatus";

export interface ILocationDialog {
  open: boolean;
  location: ILocation;
  unitStatus: IUnitStatus;
  onClose: () => void;
}

export const LocationDialog = ({ onClose, open, location, unitStatus }: ILocationDialog) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <Button onClick={onClose} variant={"text"}>
        Close
      </Button>
    </Dialog>
  );
};
