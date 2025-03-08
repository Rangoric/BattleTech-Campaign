import { useState } from "react";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { Box, Slider, Typography } from "@mui/material";

interface IParticipantWeapons {
  participant: IBattleGroupParticipant;
}

export const ParticipantWeapons: React.FC<IParticipantWeapons> = ({ participant }) => {
  const [range, setRange] = useState(0);
  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2}>
        <Typography variant={"h6"}>{participant.character.callSign}</Typography>
        <Slider
          aria-label={`${participant.character.callSign}'s Range to Target`}
          step={1}
          value={range}
          onChange={(_event, value) => setRange(value as number)}
        />
      </Box>
    </Box>
  );
};
