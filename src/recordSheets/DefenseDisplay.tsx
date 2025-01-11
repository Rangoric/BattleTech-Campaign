import {
  Box,
  Card,
  CardContent,
  CardHeader,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  eIncomingFireDirection,
  eLocations,
  IRecordSheet,
} from "./data/IRecordSheet";
import { LocationDisplay } from "./LocationDisplay";
import { useState } from "react";

export interface IDefenseDisplayProps {
  unit: IRecordSheet;
}

export const DefenseDisplay: React.FC<IDefenseDisplayProps> = ({ unit }) => {
  const [incomingFireDirection, setIncomingFireDirection] = useState(
    eIncomingFireDirection.front
  );
  return (
    <Card elevation={1}>
      <CardHeader
        title={
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={1}
            justifyContent={"space-between"}
          >
            {unit.pilotData.callSign}{" "}
            <ToggleButtonGroup
              value={incomingFireDirection}
              onChange={(_e: unknown, v: eIncomingFireDirection) =>
                setIncomingFireDirection(v)
              }
              exclusive
            >
              <ToggleButton
                value={eIncomingFireDirection.front}
                color={"primary"}
              >
                F
              </ToggleButton>
              <ToggleButton
                value={eIncomingFireDirection.left}
                color={"secondary"}
              >
                L
              </ToggleButton>
              <ToggleButton
                value={eIncomingFireDirection.right}
                color={"secondary"}
              >
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
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={1}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <LocationDisplay
            unit={unit}
            location={eLocations.leftArm}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.head}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.rightArm}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.leftTorso}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.centerTorso}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.rightTorso}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.leftLeg}
            incomingFireDirection={incomingFireDirection}
          />
          <LocationDisplay
            unit={unit}
            location={eLocations.rightLeg}
            incomingFireDirection={incomingFireDirection}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
