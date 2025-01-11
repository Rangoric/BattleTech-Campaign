import {
  Dialog,
  DialogTitle,
  Button,
  Box,
  Typography,
  ButtonGroup,
} from "@mui/material";
import { eLocations, ILocation, IRecordSheet } from "./data/IRecordSheet";
import ReportIcon from "@mui/icons-material/Report";
import HandymanIcon from "@mui/icons-material/Handyman";
import { useUnitStatus } from "./data/useUnitStatus";

export interface ILocationDialog {
  open: boolean;
  location: eLocations;
  unit: IRecordSheet;
  onClose: () => void;
}

export const LocationDialog = ({
  onClose,
  open,
  unit,
  location,
}: ILocationDialog) => {
  const [unitStatus, setUnitStatus] = useUnitStatus(unit.pilotData.callSign);
  const unitLocation = unit.vehicle.locations[location];
  const damageAtLocation = unitStatus.locations?.[location] ?? {
    armour: 0,
    rearArmour: 0,
    internalStructure: 0,
    critSlots: [],
  };

  const setNewValue = (newDamage: Partial<ILocation>) => {
    setUnitStatus({
      ...unitStatus,
      locations: {
        ...unitStatus.locations,
        [location]: {
          ...damageAtLocation,
          ...newDamage,
        },
      },
    });
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{location}</DialogTitle>
      <Box
        padding={1}
        width={300}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>
            Armour: {unitLocation.armour - damageAtLocation.armour}/
            {unitLocation.armour}
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() =>
                setNewValue({ armour: damageAtLocation.armour + 1 })
              }
            >
              <ReportIcon />
            </Button>
            <Button
              onClick={() =>
                setNewValue({ armour: damageAtLocation.armour - 1 })
              }
            >
              <HandymanIcon />
            </Button>
          </ButtonGroup>
        </Box>
        {!!unitLocation.rearArmour && (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography>
              Rear Armour:{" "}
              {unitLocation.rearArmour - damageAtLocation.rearArmour}/
              {unitLocation.rearArmour}
            </Typography>
            <ButtonGroup>
              <Button
                onClick={() =>
                  setNewValue({ rearArmour: damageAtLocation.rearArmour + 1 })
                }
              >
                <ReportIcon />
              </Button>
              <Button
                onClick={() =>
                  setNewValue({ rearArmour: damageAtLocation.rearArmour - 1 })
                }
              >
                <HandymanIcon />
              </Button>
            </ButtonGroup>
          </Box>
        )}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>
            Structure:{" "}
            {unitLocation.internalStructure -
              damageAtLocation.internalStructure}
            /{unitLocation.internalStructure}
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() =>
                setNewValue({
                  internalStructure: damageAtLocation.internalStructure + 1,
                })
              }
            >
              <ReportIcon />
            </Button>
            <Button
              onClick={() =>
                setNewValue({
                  internalStructure: damageAtLocation.internalStructure - 1,
                })
              }
            >
              <HandymanIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Button onClick={onClose} variant={"text"}>
        Close
      </Button>
    </Dialog>
  );
};
