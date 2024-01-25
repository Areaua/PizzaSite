import React from "react";
import "./Frame3.css";
import { Link } from "react-router-dom";

const Frame3 = () => {
  return (
    <div className="div26">
      <img className="icon0" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/2@2x.png" />
      <b className="b18">Реєстрація</b>
      <div className="div27">
        <div className="div28" />
        <button className="b19">Продовжити</button>
      </div>
      <div className="div29">
        <div className="div30">
          <div className="div28" />
          <b className="b19">Авторизація</b>
        </div>
        <b className="b21">Вже є аккаунт?</b>
      </div>
      <div className="body">
        <div className="div32">
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
        </div>
        <input type="text" className="e-mail3" placeholder="E-mail" />
        <input type="password" className="b22" placeholder="Пароль" />
        <input type="text" className="b23" placeholder="Номер телефона" />
        <input type="text" className="b24" placeholder="Адреса" />
        <input type="text" className="b25" placeholder="Ваш ПІБ" />
      </div>
    </div>
  );
};

export default Frame3;
