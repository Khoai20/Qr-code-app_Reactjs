import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "../pages";

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path={"/"} element={<PageLayout />}></Route>
    </Routes>
  );
}
