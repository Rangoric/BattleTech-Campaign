import { createTheme, Box, Paper } from "@mui/material";
import React from "react";
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
        <Paper
          sx={{
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            flex: "1",
            maxWidth: "calc(100% - 16px)",
          }}
        >
          {children}
        </Paper>
      </Box>
    </Box>
  );
};
