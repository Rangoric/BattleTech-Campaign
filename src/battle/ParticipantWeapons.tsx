import { useState, useMemo } from "react";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";
import { Box, Card, CardContent, Slider, Typography } from "@mui/material";
import { eEquipmentType, IWeapon } from "@/recordSheets/database/equipment/itemBase";
import { eLocations, ShortLocationNames } from "@/recordSheetsV1/data/eLocations";
import { GATORRules } from "@/recordSheets/database/rules/GATOR";
import { WeaponDisplay } from "./WeaponDisplay";

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
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2} paddingRight={1}>
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

const RangeToShow = (range: number, weapon: IWeapon, participant: IBattleGroupParticipant) => {
  if (range === undefined) {
    return "Out of Range";
  }
  const extremeApplies = (participant.character.gunnery ?? 100) <= 2;
  return (
    <>
      {[weapon.shortRange, weapon.mediumRange, weapon.longRange].map((r) => (
        <Box flexBasis={"42px"} display={"flex"} justifyContent={"right"} key={r}>
          {r}&ldquo;/{GATORRules.All(participant, r, weapon)}+
        </Box>
      ))}

      {extremeApplies && <Box flexBasis={"46px"}>{weapon.extremeRange}</Box>}
    </>
  );
};
