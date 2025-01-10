import { Card, CardContent, Typography } from "@mui/material";
import { ILocation } from "./data/IRecordSheet";
import { IUnitStatus } from "./data/IUnitStatus";

export interface ILocationDisplayProps {
  location: ILocation;
  unitStatus: IUnitStatus;
}

export const LocationDisplay: React.FC<ILocationDisplayProps> = ({ location }) => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography>RA</Typography>
        <Typography>A: {location.armour}</Typography>
        <Typography>S: {location.internalStructure}</Typography>
        <Typography>CL: {location.critSlots.length}</Typography>
      </CardContent>
    </Card>
  );
};
