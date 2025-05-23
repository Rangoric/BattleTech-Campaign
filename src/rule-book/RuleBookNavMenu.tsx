import { MenuItem, Typography } from "@mui/material";
import Link from "next/link";

const RuleBookNavMenu = () => {
  return (
    <>
      <MenuItem component={Link} href="/shopping-list">
        <Typography>Home</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/vtol">
        <Typography>VTOL Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/mechs">
        <Typography>Mech Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/quad-mechs">
        <Typography>Quad-Mech Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/wheeled-vehicles">
        <Typography>Wheeled Vehicle Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/tracked-vehicles">
        <Typography>Tracked Vehicle Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/hover-vehicles">
        <Typography>Hover Vehicle Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/weapons">
        <Typography>Weapons Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/equipment">
        <Typography>Equipment Rules</Typography>
      </MenuItem>
      <MenuItem component={Link} href="/rule-book/movement">
        <Typography>Movement Rules</Typography>
      </MenuItem>
    </>
  );
};

export { RuleBookNavMenu };
