import { Box, Card, CardContent, CardHeader, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { eIncomingFireDirection, IRecordSheet } from "./data/IRecordSheet";
import { useUnitStatus } from "./data/useUnitStatus";
import { LocationDisplay } from "./LocationDisplay";
import { useState } from "react";

export interface IDefenseDisplayProps {
  unit: IRecordSheet;
}

export const DefenseDisplay: React.FC<IDefenseDisplayProps> = ({ unit }) => {
  const [unitStatus] = useUnitStatus(unit.pilotData.callSign);
  const [incomingFireDirection, setIncomingFireDirection] = useState(eIncomingFireDirection.front);
  return (
    <Card elevation={1}>
      <CardHeader
        title={
          <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"space-between"}>
            {unit.pilotData.callSign}{" "}
            <ToggleButtonGroup value={incomingFireDirection} onChange={(e, v) => setIncomingFireDirection(v)} exclusive>
              <ToggleButton value={eIncomingFireDirection.front} color={"primary"}>
                F
              </ToggleButton>
              <ToggleButton value={eIncomingFireDirection.left} color={"secondary"}>
                L
              </ToggleButton>
              <ToggleButton value={eIncomingFireDirection.right} color={"secondary"}>
                R
              </ToggleButton>
              <ToggleButton value={eIncomingFireDirection.rear} color={"error"}>
                B
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        }
      />
      <CardContent>
        <Box display={"flex"} flexDirection={"row"} gap={1} flexWrap={"wrap"} justifyContent={"center"}>
          <LocationDisplay location={unit.vehicle.locations.LA} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.H} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.RA} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.LT} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.CT} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.RT} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.LL} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
          <LocationDisplay location={unit.vehicle.locations.RL} unitStatus={unitStatus} incomingFireDirection={incomingFireDirection} />
        </Box>
      </CardContent>
    </Card>
  );
};
