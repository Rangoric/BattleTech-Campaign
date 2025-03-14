import { IWeaponActiveSheet } from "@/recordSheets/database/equipment/ActiveSheets";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { eLocations, ShortLocationNames } from "@/recordSheetsV1/data/eLocations";
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
  const extremeApplies = accuracyG <= 2;

  if (range === undefined) {
    return "Out of Range";
  }

  return (
    <>
      {[weapon.shortRange, weapon.mediumRange, weapon.longRange].map((r, i, arr) => (
        <Box
          flexBasis={"42px"}
          display={"flex"}
          justifyContent={"right"}
          key={r}
          color={range > (arr[i - 1] || 0) && range <= r ? "red" : "inherit"}
        >
          {r}&ldquo;/{GATORRules.All(participant, r, weapon)}+
        </Box>
      ))}
      {extremeApplies && <Box flexBasis={"46px"}>{weapon.extremeRange}</Box>}
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
            D: {weapon.damage} | H: {weapon.heat}
          </Box>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"right"}>
            {getRangeDisplay(range, weapon, participant)}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};
