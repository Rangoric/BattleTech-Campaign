import { Framework } from "@/layout/Framework";
import { reset } from "@/recordSheets/database/databaseSlice";
import { useAppDispatch, useAppSelector } from "@/recordSheets/store";
import { Box, Button } from "@mui/material";
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
          <h1>Battle Group</h1>
          <Box>{JSON.stringify(database)}</Box>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
        </>
      )}
    </Framework>
  );
};

export default BattleGroupDisplay;
