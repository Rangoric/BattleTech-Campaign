import { Dialog, DialogTitle, Button, Box, ButtonGroup } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";
import { eLocations } from "./data/eLocations";
import { IActiveBattleMechSheet } from "./data/ActiveSheets";
import { Actions, getCritSlots } from "./data/Actions";

export interface ILocationDialog {
  open: boolean;
  location: eLocations;
  sheet: IActiveBattleMechSheet;
  state: [IActiveBattleMechSheet[], (x: IActiveBattleMechSheet) => void];
  onClose: () => void;
}

export const LocationDialog = ({
  onClose,
  open,
  sheet,
  state,
  location,
}: ILocationDialog) => {
  const unitLocation = sheet.unit.locations[location];

  const critSlots = getCritSlots(sheet, location);
  const [, dispatch] = state;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{location}</DialogTitle>
      <Box
        padding={1}
        width={360}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
      >
        <Box>
          <ButtonGroup>
            <Button
              onClick={() =>
                dispatch(Actions.BattleMech.hitArmor(location, 1, sheet))
              }
              color={
                unitLocation.armorDamage >= unitLocation.armor
                  ? "error"
                  : "primary"
              }
            >
              Armour: {unitLocation.armor - unitLocation.armorDamage}/
              {unitLocation.armor}
            </Button>
            <Button
              onClick={() =>
                dispatch(Actions.BattleMech.repairArmor(location, sheet))
              }
            >
              <HandymanIcon />
            </Button>
          </ButtonGroup>
        </Box>
        {!!unitLocation.rearArmor && (
          <ButtonGroup>
            <Button
              onClick={() =>
                dispatch(Actions.BattleMech.hitRearArmor(location, 1, sheet))
              }
              color={
                unitLocation.rearArmorDamage ?? 0 >= unitLocation.rearArmor
                  ? "error"
                  : "primary"
              }
            >
              Rear Armour:{" "}
              {unitLocation.rearArmor - (unitLocation.rearArmorDamage ?? 0)}/
              {unitLocation.rearArmor}
            </Button>
            <Button
              onClick={() =>
                dispatch(Actions.BattleMech.repairRearArmor(location, sheet))
              }
            >
              <HandymanIcon />
            </Button>
          </ButtonGroup>
        )}
        <Box>
          <ButtonGroup>
            <Button
              onClick={() => {}}
              color={
                unitLocation.structureDamage >= unitLocation.structure
                  ? "error"
                  : "primary"
              }
            >
              Structure: {unitLocation.structure - unitLocation.structureDamage}
              /{unitLocation.structure}
            </Button>
            <Button
              onClick={() =>
                dispatch(Actions.BattleMech.repairStructure(location, sheet))
              }
            >
              <HandymanIcon />
            </Button>
          </ButtonGroup>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          {critSlots.map((slot, index) => (
            <Button
              key={slot.name + index}
              onClick={() =>
                dispatch(Actions.BattleMech.crit(location, index + 1, sheet))
              }
              variant={"outlined"}
              color={
                slot.hits.find(
                  (t) => t.location === location && t.slot === index + 1
                )
                  ? "error"
                  : "primary"
              }
            >
              {slot.name}
            </Button>
          ))}
        </Box>
      </Box>
      <Button onClick={onClose} variant={"text"}>
        Close
      </Button>
    </Dialog>
  );
};
