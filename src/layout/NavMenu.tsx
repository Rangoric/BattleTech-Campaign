import { MenuItem, Typography } from "@mui/material";
import Link from "next/link";

export const NavMenu = () => (
  <>
    <MenuItem component={Link} href="/shopping-list">
      <Typography>Shopping List</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/training">
      <Typography>Training Chart</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/general-inventory">
      <Typography>General Inventory</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/monthly-report-3069-07">
      <Typography>End of August 3069</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/monthly-report-3069-06">
      <Typography>End of June 3069</Typography>
    </MenuItem>
    <MenuItem component={Link} href="/battle-group">
      <Typography>Battle Group</Typography>
    </MenuItem>
  </>
);
