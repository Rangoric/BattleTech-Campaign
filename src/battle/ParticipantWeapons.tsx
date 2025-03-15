import { useState, useMemo } from "react";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { Box, Slider, Typography } from "@mui/material";
import { eEquipmentType } from "@/recordSheets/database/equipment/itemBase";
import { eLocations } from "@/recordSheetsV1/data/eLocations";
import { WeaponDisplay } from "./WeaponDisplay";
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

  const marks = useMemo(() => {
    const ranges = new Set<number>();
    weapons.forEach((weapon) => {
      if (weapon.minRange !== undefined) {
        ranges.add(weapon.minRange);
      }
      ranges.add(weapon.shortRange);
      ranges.add(weapon.mediumRange);
      ranges.add(weapon.longRange);
      if (GATORRules.G(participant.character) <= 2) {
        ranges.add(weapon.extremeRange);
      }
    });

    const sortedRanges = [...ranges].toSorted();
    return sortedRanges.map((r) => ({ value: r, label: <Typography variant={"caption"}>{r}&ldquo;</Typography> }));
  }, [weapons, participant.character]);

  return (
    <Box>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2} paddingRight={1}>
        <Typography variant={"h6"}>{participant.character.callSign}</Typography>
        <Slider
          aria-label={`${participant.character.callSign}'s Range to Target`}
          step={1}
          value={range}
          max={maxExtremeRange}
          valueLabelDisplay={"on"}
          onChange={(_event, value) => setRange(value as number)}
          marks={marks}
        />
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
        {weaponsInLocation.map((weapon, index) => (
          <WeaponDisplay
            key={weapon.location + weapon.weapon.name + index}
            range={range}
            weaponWithLocation={weapon}
            participant={participant}
          />
        ))}
      </Box>
    </Box>
  );
};
