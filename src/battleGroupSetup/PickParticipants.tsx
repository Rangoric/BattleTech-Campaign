import { selectParticipants } from "@/recordSheets/battleGroups/selectParticipants";
import { useAppDispatch, useAppSelector } from "@/recordSheets/store";
import { Box, Button, Typography } from "@mui/material";
import { ParticipantQuickCard } from "./ParticipantQuickCard";
import { AllCharacterCallSigns, AllUnitDesignations } from "@/recordSheets/database";
import { useState } from "react";
import { PickCharacter } from "./PickCharacter";
import { PickUnit } from "./PickUnit";
import { addParticipant, removeParticipant } from "@/recordSheets/battleGroups/battleGroupSlice";

export const PickParticipants: React.FC = () => {
  const participants = useAppSelector(selectParticipants);
  const characterDatabase = useAppSelector((state) => state.database.characters);
  const unitDatabase = useAppSelector((state) => state.database.units);
  const [pickedCharacter, setPickedCharacter] = useState<AllCharacterCallSigns | undefined>(undefined);
  const [pickedUnit, setPickUnit] = useState<AllUnitDesignations | undefined>(undefined);
  const dispatch = useAppDispatch();

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={1}>
        {participants.map((t) => (
          <ParticipantQuickCard
            participant={t}
            onRemove={() => {
              dispatch(removeParticipant(t.keys));
            }}
          />
        ))}
      </Box>
      <Box>
        {pickedCharacter && (
          <Typography>
            {characterDatabase[pickedCharacter].callSign}
            <br />
            Usually Pilots:{" "}
            {characterDatabase[pickedCharacter].usuallyPilots.map((t) => unitDatabase[t].designation).join(", ")}
          </Typography>
        )}
        {pickedUnit && <Typography>{unitDatabase[pickedUnit].designation}</Typography>}
        {pickedCharacter && pickedUnit && (
          <Button
            onClick={() => {
              dispatch(addParticipant({ character: pickedCharacter, unit: pickedUnit }));
              setPickedCharacter(undefined);
              setPickUnit(undefined);
            }}
          >
            Add Participant
          </Button>
        )}
      </Box>
      <Box>
        {!pickedCharacter && (
          <PickCharacter
            unavailableCharacters={participants.map((t) => t.keys.character)}
            onPickCharacter={setPickedCharacter}
          />
        )}
        {pickedCharacter && !pickedUnit && (
          <PickUnit unavailableUnits={participants.map((t) => t.keys.unit)} onPickUnit={setPickUnit} />
        )}
      </Box>
    </>
  );
};
