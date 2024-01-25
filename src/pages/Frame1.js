import "./Frame1.css";
import React from "react";
import { Link } from "react-router-dom";

const Frame1 = () => {

  return (
    <div className="div">
      <img className="icon" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/1@2x.png" />

      <input type="text" className="e-mail" placeholder="E-mail" />
      <input type="password" className="b" placeholder="Пароль" />

      <div className="div1">
      </div>
      <div className="item" />
      <div className="child" />
 
      <b className="b1">Авторизація</b>
      <button className="b3">Немає аккаунта?</button>
      <div className="div2">
        <div className="div3" />
          <Link to ="/register">
          <button className="b2">Продовжити</button>
          </Link>
      </div>

      <div className="div4">
        <div className="div3" />
        <Link to ="/">
        <button className="b2">Клієнт</button>
        </Link>
      </div>
      <div className="div6">
        <div className="div3" />
        <Link to ="/manager">
        <button className="b2">Менеджер</button>
        </Link>
      </div>
    </div>
  );
};

export default Frame1;
