import { BottomNavigation, BottomNavigationAction, Box, Link as MUILink, Paper } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ShieldIcon from "@mui/icons-material/Shield";
import { useEffect, useState } from "react";
import { Defenses } from "@/battle/Defenses";
import { Weapons } from "@/battle/Weapons";
import { Movement } from "@/battle/Movement";
import { useAppSelector } from "@/recordSheets/store";
import Link from "next/link";

const Battle: React.FC = () => {
  const [value, setValue] = useState("Movement");
  const [isClient, setIsClient] = useState(false);
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const database = useAppSelector((state) => state.database);
  const battleGroup = useAppSelector((state) => state.battleGroup);
  useEffect(() => {
    setIsClient(true);
    if (window) {
      localStorage.setItem("database", JSON.stringify(database));
      localStorage.setItem("battleGroup", JSON.stringify(battleGroup));
    }
  }, [database, battleGroup]);
  return (
    <>
      {isClient && (
        <Box padding={1}>
          <MUILink component={Link} href="/battle-group">
            Go to Battle Group
          </MUILink>
          <Box padding={1}>
            {value === "Movement" && <Movement />}
            {value === "Weapons" && <Weapons />}
            {value === "Defenses" && <Defenses />}
          </Box>
          <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation value={value} onChange={handleChange}>
              <BottomNavigationAction label={"Movement"} value={"Movement"} icon={<DirectionsRunIcon />} />
              <BottomNavigationAction label={"Weapons"} value={"Weapons"} icon={<TrackChangesIcon />} />
              <BottomNavigationAction label={"Defenses"} value={"Defenses"} icon={<ShieldIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Battle;
