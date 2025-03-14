import { useState, useMemo } from "react";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { Box, Slider, Typography } from "@mui/material";
import { eEquipmentType, IWeapon } from "@/recordSheets/database/equipment/itemBase";
import { eLocations, ShortLocationNames } from "@/recordSheetsV1/data/eLocations";
import { GATORRules } from "@/recordSheets/database/rules/GATOR";

interface IParticipantWeapons {
  participant: IBattleGroupParticipant;
}

export const ParticipantWeapons: React.FC<IParticipantWeapons> = ({ participant }) => {
  const [range, setRange] = useState(0);

  const weaponsInLocation = useMemo(() => {
    const keys = Object.keys(participant.unit.locations) as eLocations[];
    return keys
      .filter((t) => participant.unit.locations[t]?.equipment.find((item) => item.type === eEquipmentType.Weapon))
      .flatMap((t) => {
        const weapons =
          participant.unit.locations[t]?.equipment.filter((item) => item.type === eEquipmentType.Weapon) ?? [];
        return weapons.map((weapon) => ({ location: t, weapon }));
      });
  }, [participant.unit.locations]);

  const weapons = useMemo(() => weaponsInLocation.map((item) => item.weapon), [weaponsInLocation]);

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
      {weaponsInLocation.map((weapon) => (
        <Box display={"flex"} flexDirection={"row"} gap={1} justifyContent={"space-between"} key={weapon.weapon.name}>
          <Typography>
            {ShortLocationNames[weapon.location]} - {weapon.weapon.name}
          </Typography>
          <Typography>{RangeToShow(range, weapon.weapon, participant)}</Typography>
        </Box>
      ))}
    </Box>
  );
};

const RangeToShow = (range: number, weapon: IWeapon, participant: IBattleGroupParticipant) => {
  if (range === undefined) {
    return "Out of Range";
  }
  const [rangeString, modifier] = GATORRules.R(range, weapon);
  if (modifier === undefined) {
    return rangeString;
  }
  const GAR = GATORRules.G(participant) + GATORRules.A(participant) + modifier;
  return `${rangeString} GAR:${GAR}`;
};
