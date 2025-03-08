import { PickParticipants } from "@/battleGroup/PickParticipants";
import { Framework } from "@/layout/Framework";
import { reset } from "@/recordSheets/database/databaseSlice";
import { useAppDispatch, useAppSelector } from "@/recordSheets/store";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const BattleGroupDisplay = () => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useAppDispatch();
  const database = useAppSelector((state) => state.database);
  useEffect(() => {
    setIsClient(true);
    if (window) {
      localStorage.setItem("database", JSON.stringify(database));
    }
  }, [database]);

  return (
    <Framework>
      {isClient && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h3">Battle Group </Typography>
            <Button onClick={() => dispatch(reset())} variant="contained">
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
          <PickParticipants />
        </>
      )}
    </Framework>
  );
};

export default BattleGroupDisplay;
