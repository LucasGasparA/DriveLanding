import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./styles.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1D4ED8", light: "#60A5FA", dark: "#173EA5", contrastText: "#ffffff" },
    secondary: { main: "#047481", light: "#2DD4BF", dark: "#115E59", contrastText: "#ffffff" },
    warning: { main: "#D97706", light: "#FBBF24", dark: "#B45309", contrastText: "#111827" },
    background: { default: "#F5F7FA", paper: "#FFFFFF" },
    text: { primary: "#18202F", secondary: "#667085" },
    divider: "#DDE3EA",
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    h1: { fontWeight: 850, letterSpacing: 0 },
    h2: { fontWeight: 820, letterSpacing: 0 },
    h3: { fontWeight: 780, letterSpacing: 0 },
    button: { textTransform: "none", fontWeight: 760, letterSpacing: 0 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, minHeight: 44 },
        containedPrimary: {
          background: "#1D4ED8",
          "&:hover": { background: "#173EA5" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 700 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none", boxShadow: "none" },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
