// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation, useNavigate } from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import axios from 'axios';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();  // Use useNavigate instead of useHistory


  const MyComponent = () => {
    const [data, setData] = useState('');

    useEffect(() => {
      // Выполнение HTTP-запроса к серверу Python
      axios.get('/main.py')
        .then(response => {
          setData(response.data.message);
        })
        .catch(error => {
          console.error('Ошибка запроса:', error);
        });
    }, []);
  
    return (
      <div>
        <p>Данные от сервера: {data}</p>
      </div>
    );
  };

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
