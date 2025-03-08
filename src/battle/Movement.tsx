import { selectParticipants } from "@/recordSheets/battleGroups/selectParticipants";
import { useAppSelector } from "@/recordSheets/store";
import { Box } from "@mui/material";
import { ParticipantMovement } from "./ParticipantMovement";

export const Movement: React.FC = () => {
  const participants = useAppSelector(selectParticipants);
  return (
    <Box>
      {participants.map((participant) => (
        <ParticipantMovement key={participant.keys.character} participant={participant} />
      ))}
    </Box>
  );
};
