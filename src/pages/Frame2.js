import React, { useState } from "react";
import "./Frame2.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Frame2 = () => {
  const [loginData, setLoginData] = useState({
    Email: "",
    Password: "",
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
        // Optionally, you can handle the login success (e.g., store token) and redirect the user
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
        name="Email"
        className="e-mail"
        placeholder="E-mail"
        value={loginData.Email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="Password"
        className="b"
        placeholder="Пароль"
        value={loginData.Password}
        onChange={handleInputChange}
      />

      <div className="div1">
        {/* Добавьте ваш код для div1 */}
      </div>
      <div className="item" />
      <div className="child" />

      <b className="b1">Авторизація</b>
      <Link to="/register">
      <button className="b3">Немає аккаунта?</button>
      </Link>
      <div className="div2">
        <div className="div3" />
        <button className="b2" onClick={handleLogin}>
          Продовжити
        </button>
      </div>
      <div className="div4">
        <div className="div3" />
        <Link to="/supplier">
          <button className="b2">Постачальник</button>
        </Link>
      </div>
      <div className="div6">
        <div className="div3" />
        <Link to="/manager">
          <button className="b2">Менеджер</button>
        </Link>
      </div>
    </div>
  );
};

export default Frame2;
