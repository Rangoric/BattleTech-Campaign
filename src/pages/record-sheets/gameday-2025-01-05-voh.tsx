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
import { PlaySheets } from "@/recordSheets/PlaySheets";
import { RecordSheets } from "@/recordSheets/RecordSheets";

const involvedUnits = [
  "INANNA",
  "ODIN",
  "SARASWARTI",
  "GERI",
  "NYYRIKKI",
  "AETHER",
  "GD(MG)",
  "GD(LRR)",
];

const Page = () => {
  return <RecordSheets units={involvedUnits} />;
};

export default Page;
