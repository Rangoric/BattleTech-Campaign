import { selectParticipants } from "@/recordSheets/battleGroups/selectParticipants";
import { useAppSelector } from "@/recordSheets/store";
import { Box } from "@mui/material";
import { ParticipantWeapons } from "./ParticipantWeapons";

export const Weapons: React.FC = () => {
  const participants = useAppSelector(selectParticipants);
  return (
    <Box>
      {participants.map((participant) => (
        <ParticipantWeapons key={participant.keys.character} participant={participant} />
      ))}
    </Box>
  );
};
