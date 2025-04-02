import { MenuItem, Typography } from "@mui/material";
import Link from "next/link";

export const RuleBookNavMenu = () => (
  <>
    <MenuItem component={Link} href="/shopping-list">
      <Typography>Home</Typography>
    </MenuItem>
  </>
);
