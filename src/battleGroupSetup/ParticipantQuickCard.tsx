import { IParticipant } from "@/recordSheets/battleGroups/battleGroupSlice";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { Box, Button, Card, Typography } from "@mui/material";

export const ParticipantQuickCard: React.FC<{
  participant: IBattleGroupParticipant;
  onRemove: () => void;
}> = ({ participant, onRemove }) => {
  return (
    <Card variant={"elevation"} elevation={1} sx={{ padding: 1 }}>
      <Typography>{participant.character.callSign}</Typography>
      <Typography>{participant.unit.designation}</Typography>
      <Button fullWidth variant={"outlined"} onClick={onRemove}>
        Remove
      </Button>
    </Card>
  );
};
