// App.js
import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Страница авторизации";
        metaDescription = "Это страница авторизации";
        break;
      case "/supplier":
        title = "Страница поставщика";
        metaDescription = "Это страница поставщика";
        break;
      case "/manager":
        title = "Страница менеджера";
        metaDescription = "Это страница менеджера";
        break;
      case "/register":
        title = "Страница регистрации";
        metaDescription = "Это страница регистрации";
        break;
      default:
        title = "Заголовок по умолчанию";
        metaDescription = "Мета-описание по умолчанию";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame2 />} />
      <Route path="/supplier" element={<Frame1 />} />
      <Route path="/manager" element={<Frame />} />
      <Route path="/register" element={<Frame3 />} />
      {/* Добавьте маршрут для Frame2, если необходимо */}
    </Routes>
  );
}

export default App;