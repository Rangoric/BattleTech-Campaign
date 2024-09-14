import { createTheme, Box, Typography, MenuList, Paper } from "@mui/material";
import React from "react";
import { NavMenu } from "./NavMenu";
import { TitleBar } from "./TitleBar";

export const Framework: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const theme = createTheme();
  return (
    <Box>
      <TitleBar />
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
          <NavMenu />
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
