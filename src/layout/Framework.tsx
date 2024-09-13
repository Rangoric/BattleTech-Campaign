import {
  createTheme,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuList,
  MenuItem,
  Paper,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const Framework: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const theme = createTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <Box>
      <AppBar sx={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <IconButton
            id="basic-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              marginRight: 2,
              display: "block",
              [theme.breakpoints.up("md")]: { display: "none" },
            }}
            aria-controls={isDrawerOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isDrawerOpen ? "true" : undefined}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            ref={setAnchorEl}
          >
            <MenuIcon />
          </IconButton>{" "}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Valkyries of Hanakotoba&apos;s Repository
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          marginTop: "64px",
        }}
      >
        <MenuList
          sx={{
            margin: theme.spacing(2),
            marginRight: theme.spacing(1),
            position: "sticky",
            top: "0",
            flexBasis: "200px",
            maxHeight: "100vh",
            display: "none",
            [theme.breakpoints.up("md")]: { display: "block" },
          }}
        >
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
        </MenuList>
        <Paper
          sx={{
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            flex: "1",
          }}
        >
          <Typography>{children}</Typography>
        </Paper>
      </Box>
      <Menu
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        anchorEl={anchorEl}
        sx={{
          [theme.breakpoints.up("md")]: { display: "none" },
        }}
      >
        <MenuList
          sx={{
            margin: theme.spacing(2),
            marginRight: theme.spacing(1),
            position: "sticky",
            top: "0",
            width: "200px",
            maxHeight: "100vh",
            display: "block",
          }}
        >
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
        </MenuList>
      </Menu>
    </Box>
  );
};
