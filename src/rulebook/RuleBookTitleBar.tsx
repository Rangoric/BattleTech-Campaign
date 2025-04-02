import { createTheme, AppBar, Toolbar, IconButton, Typography, Menu, MenuList } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { RuleBookNavMenu } from "./RuleBookNavMenu";

export const RuleBookTitleBar = () => {
  const theme = createTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  return (
    <>
      <AppBar sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <IconButton
            id="basic-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              marginRight: 2,
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
            Quick Reference Rule Book
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu onClose={() => setIsDrawerOpen(false)} open={isDrawerOpen} anchorEl={anchorEl}>
        <MenuList
          sx={{
            margin: theme.spacing(2),
            marginRight: theme.spacing(1),
            position: "sticky",
            top: "0",
            width: "240px",
            maxHeight: "100vh",
            display: "block",
          }}
        >
          <RuleBookNavMenu />
        </MenuList>
      </Menu>
    </>
  );
};
