import { IWeaponActiveSheet } from "@/recordSheets/database/equipment/ActiveSheets";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { eLocations, ShortLocationNames } from "@/recordSheets/database/units/eLocations";
import { GATORRules } from "@/recordSheets/database/rules/GATOR";
import { IBattleGroupParticipant } from "@/recordSheets/battleGroups/IBattleGroupParticipant";

interface IWeaponDisplayProps {
  range: number;
  weaponWithLocation: {
    location: eLocations;
    weapon: IWeaponActiveSheet;
  };
  participant: IBattleGroupParticipant;
}

const getRangeDisplay = (range: number, weapon: IWeaponActiveSheet, participant: IBattleGroupParticipant) => {
  const accuracyG = GATORRules.G(participant.character);
  const hasExtremeRange = accuracyG <= 2;
  const hasMinimumRange = weapon.minRange !== undefined;

  if (range === undefined) {
    return "Out of Range";
  }

  const MinRangeDisplay = () => {
    if (!hasMinimumRange) return null;
    return <>{weapon.minRange}&ldquo;-</>;
  };

  return (
    <>
      {[weapon.shortRange, weapon.mediumRange, weapon.longRange].map((r, i, arr) => (
        <Typography
          flexBasis={"max-content"}
          display={"flex"}
          justifyContent={"right"}
          key={r}
          color={(range > (arr[i - 1] || 0) && range <= r) || (range === 0 && i === 0) ? "inherit" : "red"}
          variant={"caption"}
        >
          {i === 0 && <MinRangeDisplay />}
          {r}&ldquo;/{GATORRules.All(participant, r, weapon)}+
        </Typography>
      ))}
      {hasExtremeRange && (
        <Box flexBasis={"42px"}>
          {weapon.extremeRange}&ldquo;/{GATORRules.All(participant, weapon.extremeRange, weapon)}+
        </Box>
      )}
    </>
  );
};

export const WeaponDisplay: React.FC<IWeaponDisplayProps> = ({ range, weaponWithLocation, participant }) => {
  const { weapon, location } = weaponWithLocation;

  return (
    <Card sx={{ flexBasis: "calc(50% - 8px)" }}>
      <CardContent>
        <Typography display={"flex"} flexDirection={"column"} gap={0} variant={"caption"}>
          <Box flexGrow={1}>
            {ShortLocationNames[location]}: {weapon.name}
            <br />
            H: {weapon.heat} D: {weapon.damage} E: {weapon.effects.join(", ")}
          </Box>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"right"} gap={1}>
            {getRangeDisplay(range, weapon, participant)}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};
