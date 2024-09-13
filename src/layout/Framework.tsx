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
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const Framework: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const theme = createTheme();
  return (
    <Box>
      <AppBar sx={{ position: "static" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Valkyries of Hanakotoba&apos;s Public Repository
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
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
    </Box>
  );
};
