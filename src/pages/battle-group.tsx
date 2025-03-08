import { PickParticipants } from "@/battleGroupSetup/PickParticipants";
import { Framework } from "@/layout/Framework";
import { resetBattleGroup } from "@/recordSheets/battleGroups/battleGroupSlice";
import { reset } from "@/recordSheets/database/databaseSlice";
import { useAppDispatch, useAppSelector } from "@/recordSheets/store";
import { Box, Button, Link as MUILink, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const BattleGroupDisplay = () => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
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
    <Framework>
      {isClient && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h3">Battle Group </Typography>
            <Button
              onClick={() => {
                dispatch(reset());
                dispatch(resetBattleGroup());
              }}
              variant="contained"
            >
              Reset
            </Button>
          </Box>
          <Typography variant="body1">
            Here we set up the battle group that the simulator will use. First you will select a character, then a unit
            for them to command. If you want to reset the database, click the button below. Any changes you make are in
            local storage and will persist between sessions on the same device and browser.
          </Typography>
          <Typography variant="body1">
            Keep in mind this is simulation only and not for force organization. And battle results carry over on your
            device (hence the reset button).
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button variant="outlined" onClick={() => console.log(database)}>
              Log Database
            </Button>
            <Button variant="outlined" onClick={() => console.log(battleGroup)}>
              Log Battle Group
            </Button>
            <MUILink component={Link} href="/battle">
              Go To Battle
            </MUILink>
          </Box>

          <PickParticipants />
        </>
      )}
    </Framework>
  );
};

export default BattleGroupDisplay;
