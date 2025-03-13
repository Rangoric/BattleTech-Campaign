import { useState, useMemo } from "react";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { Box, Slider, Typography } from "@mui/material";
import { eEquipmentType } from "@/recordSheets/database/equipment/itemBase";
import { IWeaponActiveSheet } from "@/recordSheets/database/equipment/ActiveSheets";

interface IParticipantWeapons {
  participant: IBattleGroupParticipant;
}

export const ParticipantWeapons: React.FC<IParticipantWeapons> = ({ participant }) => {
  const [range, setRange] = useState(0);

  const weapons = useMemo(() => {
    return Object.values(participant.unit.locations).flatMap((location) =>
      location.equipment.filter((equip) => equip.type === eEquipmentType.Weapon),
    ) as IWeaponActiveSheet[];
  }, [participant.unit.locations]);

  const maxExtremeRange = useMemo(() => {
    return weapons.reduce((max, weapon) => {
      const range =
        participant.character.gunnery !== undefined && participant.character.gunnery <= 2
          ? weapon.extremeRange
          : weapon.longRange;
      return range > max ? range : max;
    }, 0);
  }, [weapons, participant.character.gunnery]);

  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2}>
        <Typography variant={"h6"}>{participant.character.callSign}</Typography>
        <Slider
          aria-label={`${participant.character.callSign}'s Range to Target`}
          step={1}
          value={range}
          max={maxExtremeRange}
          valueLabelDisplay={"on"}
          onChange={(_event, value) => setRange(value as number)}
        />
      </Box>
      <Typography variant={"body1"}>Max Range: {maxExtremeRange}</Typography>
    </Box>
  );
};
