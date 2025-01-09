import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { useState } from "react";
import SnowshoeingIcon from "@mui/icons-material/Snowshoeing";
import Groups2Icon from "@mui/icons-material/Groups2";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { PlaySheets } from "@/playSheets/PlaySheets";

const Page = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedUnit, setSelectedUnit] = useState("INANNA");

  return (
    <Box p={1}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Pick a Unit"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          icon={<Groups2Icon />}
          tooltipTitle="GD(LRR)"
          tooltipOpen
          onClick={() => setSelectedUnit("GD(LRR)")}
        />
        <SpeedDialAction
          icon={<Groups2Icon />}
          tooltipTitle="GD(MG)"
          tooltipOpen
          onClick={() => setSelectedUnit("GD(MG)")}
        />
        <SpeedDialAction
          icon={<LocalAirportIcon />}
          tooltipTitle="AETHER"
          tooltipOpen
          onClick={() => setSelectedUnit("AETHER")}
        />
        <SpeedDialAction
          icon={<LocalAirportIcon />}
          tooltipTitle="NYYRIKKI"
          tooltipOpen
          onClick={() => setSelectedUnit("NYYRIKKI")}
        />
        <SpeedDialAction
          icon={<Groups2Icon />}
          tooltipTitle="GERI"
          tooltipOpen
          onClick={() => setSelectedUnit("GERI")}
        />
        <SpeedDialAction
          icon={<SnowshoeingIcon />}
          tooltipTitle="SARASWARTI"
          tooltipOpen
          onClick={() => setSelectedUnit("SARASWARTI")}
        />
        <SpeedDialAction
          icon={<Groups2Icon />}
          tooltipTitle="ODIN"
          tooltipOpen
          onClick={() => setSelectedUnit("ODIN")}
        />
        <SpeedDialAction
          icon={<SnowshoeingIcon />}
          tooltipTitle="INANNA"
          tooltipOpen
          onClick={() => setSelectedUnit("INANNA")}
        />
      </SpeedDial>
      <PlaySheets unit={selectedUnit} />
    </Box>
  );
};

export default Page;
