// Frame.js
import React, { useState } from "react";
import "./Frame.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Frame = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Perform login logic here
    axios.post('/api/login', loginData)
      .then(response => {
        console.log(response.data.message);
        // Optionally, you can redirect the user to a dashboard or perform other actions.
        history.push('/');
      })
      .catch(error => {
        console.error('Error logging in:', error.response.data.error);
        // Handle login error (display error message, etc.)
      });
  };

  return (
    <div className="div">
      <img className="icon" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/1@2x.png" />


      <input
        type="text"
        name="email"
        className="e-mail"
        placeholder="E-mail"
        value={loginData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        className="b"
        placeholder="Пароль"
        value={loginData.password}
        onChange={handleInputChange}
      />

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
        <button className="b2" onClick={handleLogin}>Продовжити</button>
      </div>
      <div className="div4">
        <div className="div3" />
        <Link to="/supplier">
        <button className="b2">Постачальник</button>
        </Link>
      </div>
      <div className="div6">
        <div className="div3" />
        <Link to="/">
          <button className="b2">Клієнт</button>
        </Link>
      </div>
    </div>
  );
};

export default Frame;
