import { Dialog, DialogTitle, Button, Box, ButtonGroup } from "@mui/material";
import HandymanIcon from "@mui/icons-material/Handyman";

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
  const critSlotAt = (critSlot: number) =>
    damageAtLocation.critSlots.find((t) => t.critSlot === critSlot);
  const setNewCritSlot = (newCritSlot: ICritSlotStatus) => {
    const existingCritSlot = critSlotAt(newCritSlot.critSlot);
    const critSlot = {
      critSlot: newCritSlot.critSlot,
      damaged: newCritSlot.damaged
        ? !existingCritSlot?.damaged
        : existingCritSlot?.damaged ?? false,
      spentAmmo: (existingCritSlot?.spentAmmo ?? 0) + newCritSlot.spentAmmo,
    };
    setUnitStatus({
      ...unitStatus,
      locations: {
        ...unitStatus.locations,
        [location]: {
          ...damageAtLocation,
          critSlots: [
            ...damageAtLocation.critSlots.filter(
              (t) => t.critSlot !== newCritSlot.critSlot
            ),
            critSlot,
          ],
        },
      },
    });
  };

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
                setNewValue({ armour: damageAtLocation.armour + 1 })
              }
              color={
                damageAtLocation.armour >= unitLocation.armour
                  ? "error"
                  : "primary"
              }
            >
              Armour: {unitLocation.armour - damageAtLocation.armour}/
              {unitLocation.armour}
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
          <ButtonGroup>
            <Button
              onClick={() =>
                setNewValue({ rearArmour: damageAtLocation.rearArmour + 1 })
              }
              color={
                damageAtLocation.rearArmour >= unitLocation.rearArmour
                  ? "error"
                  : "primary"
              }
            >
              Rear Armour:{" "}
              {unitLocation.rearArmour - damageAtLocation.rearArmour}/
              {unitLocation.rearArmour}
            </Button>
            <Button
              onClick={() =>
                setNewValue({ rearArmour: damageAtLocation.rearArmour - 1 })
              }
            >
              <HandymanIcon />
            </Button>
          </ButtonGroup>
        )}
        <Box>
          <ButtonGroup>
            <Button
              onClick={() =>
                setNewValue({
                  internalStructure: damageAtLocation.internalStructure + 1,
                })
              }
              color={
                damageAtLocation.internalStructure >=
                unitLocation.internalStructure
                  ? "error"
                  : "primary"
              }
            >
              Structure:{" "}
              {unitLocation.internalStructure -
                damageAtLocation.internalStructure}
              /{unitLocation.internalStructure}
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
        <Box>
          {unitLocation.critSlots.map((slot, index) => (
            <ButtonGroup key={slot.item + index} sx={{ width: "100%" }}>
              <Button
                onClick={() =>
                  setNewCritSlot({
                    critSlot: index,
                    damaged: true,
                    spentAmmo: 0,
                  })
                }
                color={critSlotAt(index)?.damaged ? "error" : "primary"}
              >
                {(index % 6) + 1}: {slot.item}{" "}
                {slot.ammoCount && (
                  <>
                    {slot.ammoCount - (critSlotAt(index)?.spentAmmo ?? 0)}/
                    {slot.ammoCount}
                  </>
                )}
              </Button>
              {slot.ammoCount !== undefined && (
                <>
                  <Button
                    onClick={() =>
                      setNewCritSlot({
                        critSlot: index,
                        damaged: false,
                        spentAmmo: 1,
                      })
                    }
                  >
                    Spend
                  </Button>
                  <Button
                    onClick={() =>
                      setNewCritSlot({
                        critSlot: index,
                        damaged: false,
                        spentAmmo: -1,
                      })
                    }
                  >
                    Add
                  </Button>
                </>
              )}
            </ButtonGroup>
          ))}
        </Box>
      </Box>
      <Button onClick={onClose} variant={"text"}>
        Close
      </Button>
    </Dialog>
  );
};
