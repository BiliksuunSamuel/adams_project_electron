import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import HomeRouter from "./HomeRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthRouter />
      <HomeRouter />
    </BrowserRouter>
  );
}
