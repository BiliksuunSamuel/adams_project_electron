import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AddServicePage, HomePage } from "../pages/home/view";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="service/add" element={<AddServicePage />} />
      </Route>
    </Routes>
  );
}
