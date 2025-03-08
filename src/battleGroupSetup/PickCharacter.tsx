import { AllCharacterCallSigns } from "@/recordSheets/database";
import { useAppSelector } from "@/recordSheets/store";
import { Box, Button } from "@mui/material";

interface IPickCharacterProps {
  unavailableCharacters: AllCharacterCallSigns[];
  onPickCharacter: (character: AllCharacterCallSigns) => void;
}
export const PickCharacter: React.FC<IPickCharacterProps> = ({ unavailableCharacters, onPickCharacter }) => {
  const characterDatabase = useAppSelector((state) => state.database.characters);
  const unitDatabase = useAppSelector((state) => state.database.units);
  const keys = Object.keys(characterDatabase) as AllCharacterCallSigns[];
  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={1}>
      {keys
        .filter((t) => !unavailableCharacters.includes(t))
        .map((character) => (
          <Button variant={"contained"} key={character} onClick={() => onPickCharacter(character)}>
            {characterDatabase[character].callSign}
            <br />
            Usually Pilots:{" "}
            {characterDatabase[character].usuallyPilots.map((t) => unitDatabase[t].designation).join(", ")}
          </Button>
        ))}
    </Box>
  );
};
