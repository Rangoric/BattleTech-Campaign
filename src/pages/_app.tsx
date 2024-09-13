// import { Framework } from "@/layout/Framework";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  typography: {
    h1: {
      marginTop: "32px",
      marginBottom: "4px",
    },
    h2: {
      marginTop: "0",
      marginBottom: "4px",
    },
    h3: {
      marginTop: "32px",
      marginBottom: "4px",
    },
    h4: {
      marginTop: "32px",
      marginBottom: "4px",
    },
    h5: {
      marginTop: "32px",
      marginBottom: "4px",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
