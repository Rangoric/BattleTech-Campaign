import { MenuItem, Typography } from "@mui/material";
import Link from "next/link";

export const NavMenu = () => (
  <>
    <MenuItem component={Link} href="/command-structure">
      <Typography>Command Structure</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/lance-platoon">
      <Typography>Lance Platoon</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/armoured-platoon">
      <Typography>Armoured Platoon</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/infantry-platoon">
      <Typography>Infantry Platoon</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/supplies">
      <Typography>Supplies</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/nejiro">
      <Typography>Nejiro</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/game-day-2024-09-15">
      <Typography>Game Day 2024-09-15</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/game-day-2024-08-11">
      <Typography>Game Day 2024-08-11</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/game-day-2024-07-07">
      <Typography>Game Day 2024-07-07</Typography>
    </MenuItem>
  </>
);
