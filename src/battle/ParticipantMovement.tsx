import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { setMovementMode } from "@/recordSheets/database/databaseSlice";
import { eMovementSpeed } from "@/recordSheets/database/units/IUnit";
import { useAppDispatch } from "@/recordSheets/store";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

interface IParticipantMovementProps {
  participant: IBattleGroupParticipant;
}

export const ParticipantMovement: React.FC<IParticipantMovementProps> = ({ participant }) => {
  const dispatch = useAppDispatch();
  const handleChange = (_event: React.MouseEvent<HTMLElement>, movementMode: eMovementSpeed) => {
    dispatch(setMovementMode({ unit: participant.keys.unit, movementMode }));
  };
  return (
    <Box>
      <Typography variant={"h6"}>{participant.character.callSign}</Typography>
      <Box>
        <ToggleButtonGroup
          color={"primary"}
          value={participant.unit.movement.currentSpeed}
          onChange={handleChange}
          exclusive
          fullWidth
        >
          <ToggleButton value={eMovementSpeed.stationary} color={"info"}>
            Ping
          </ToggleButton>
          <ToggleButton value={eMovementSpeed.prone} color={"info"}>
            Prone
          </ToggleButton>
          <ToggleButton value={eMovementSpeed.walking} color={"standard"}>
            Walk {participant.unit.movement.walkSpeed}
          </ToggleButton>
          <ToggleButton value={eMovementSpeed.running} color={"warning"}>
            Run {participant.unit.movement.runSpeed}
          </ToggleButton>
          <ToggleButton
            value={eMovementSpeed.jumping}
            color={"error"}
            disabled={participant.unit.movement.jumpSpeed === undefined}
          >
            Jump {!!participant.unit.movement.jumpSpeed && participant.unit.movement.jumpSpeed}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
