import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useMemo } from "react";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    h1: {
      marginTop: "32px",
      marginBottom: "4px",
    },
    // H2 is used for the title of the page, to make it fit right in the design, no top margin is needed
    h2: {
      marginTop: "0",
      marginBottom: "4px",
    },
    h3: {
      marginTop: "8px",
      marginBottom: "4px",
    },
    h4: {
      marginTop: "8px",
      marginBottom: "4px",
    },
    h5: {
      marginTop: "8px",
      marginBottom: "4px",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
