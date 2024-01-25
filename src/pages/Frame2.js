// Frame2.js
import React from "react";
import "./Frame2.css";
import { Link } from "react-router-dom";

const Frame2 = () => {
  return (
    <div className="div">
      <img className="icon" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/1@2x.png" />

      <input type="text" className="e-mail" placeholder="E-mail" />
      <input type="password" className="b" placeholder="Пароль" />

      <div className="div1">
        {/* Добавьте ваш код для div1 */}
      </div>
      <div className="item" />
      <div className="child" />

      <b className="b1">Авторизація</b>
      <Link to="/register"> {/* Изменил путь только для этой кнопки */}
        <button className="b3">Немає аккаунта?</button>
      </Link>

      <div className="div2">
        <div className="div3" />
        <button className="b2">Продовжити</button>
      </div>
      <div className="div4">
        <div className="div3" />
        <Link to="/supplier">
          <button className="b2">Постачальник</button>
        </Link>
      </div>
      <div className="div6">
        <div className="div3" />
        <button className="b2">Менеджер</button>
      </div>
    </div>
  );
};

export default Frame2;
