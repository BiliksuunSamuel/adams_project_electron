import * as React from "react";

import "./App.css";
import { Router } from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./configuration";
import "../index.css";
import { Loader } from "./components";
import { useAppSelector } from "./store";
import { useNavigate } from "react-router";
export default function App() {
  const { loading } = useAppSelector((state) => state.ResponseReducer);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loader open={loading} />
      <Router />
    </ThemeProvider>
  );
}
