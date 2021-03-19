import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { ruRU } from "@material-ui/core/locale";

import { CountriesPreloader } from "./api";
import { StoreProvider } from "./stores";
import { Routes } from "./routes";

const containerSelector = "root";
const fullscreen = { width: "100%", height: "100%" };

const PUBLIC_URL = process.env.PUBLIC_URL;

function AppProvider() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme(
        {
          palette: {
            type: prefersDarkMode ? "dark" : "light",
          },
          overrides: {
            MuiCssBaseline: {
              "@global": {
                html: { ...fullscreen },
                body: { ...fullscreen },
                ["#" + containerSelector]: {
                  ...fullscreen,
                  display: "flex",
                  flexDirection: "column",
                },
              },
            },
          },
        },
        ruRU
      ),
    [prefersDarkMode]
  );

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={PUBLIC_URL}>
          <CssBaseline />
          <CountriesPreloader />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default AppProvider;
