import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";  // Изменил импорт
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>  {/* Изменил открытие маршрутов */}
      <Route path="/" element={<Frame2 />} />
      <Route path="/supplier" element={<Frame1 />} />
      <Route path="/manager" element={<Frame />} />
      <Route path="/register" element={<Frame3 />} />
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
