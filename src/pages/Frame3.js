import React, { useState } from "react";
import "./Frame3.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Frame3 = () => {

  const [registrationData, setRegistrationData] = useState({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Address: "",
    Role: "Клиент", // Assuming the default role is "Клиент"
  });

  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleRegistration = () => {
    // Perform registration logic here
    axios.post('/api/register', registrationData)
      .then(response => {
        console.log(response.data.message);
        // Optionally, you can redirect the user to a success page or perform other actions.
        history.push('/');
      })
      .catch(error => {
        console.error('Error registering user:', error.response.data.error);
        // Handle registration error (display error message, etc.)
      });
  };

  return (
    <div className="div26">
      <img className="icon0" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/2@2x.png" />
      <b className="b18">Реєстрація</b>
      <div className="div27">
        <div className="div28" />
        <Link to="/">
        <button className="b19" onClick={handleRegistration} >Продовжити</button>
        </Link>
      </div>
      <div className="div29">
        <div className="div30">
          <div className="div28" />
          <Link to="/">
          <button className="b19">Авторизація</button>
          </Link>
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
        <input type="text" name="Name" className="b25" placeholder="Ваш ПІБ" value={registrationData.Name} onChange={handleInputChange} />
        <input type="text" name="Email" className="e-mail3" placeholder="E-mail" value={registrationData.Email} onChange={handleInputChange}  />
        <input type="password" name="Password" className="b22"  placeholder="Password"  value={registrationData.Password}  onChange={handleInputChange}  />
        <input  type="text"   name="PhoneNumber"  className="b23"  placeholder="Phone Number"  value={registrationData.PhoneNumber}   onChange={handleInputChange} />
        <input  type="text"  name="Address" className="b24"  placeholder="Address" value={registrationData.Address}  onChange={handleInputChange} />

      </div>
    </div>
  );
};

export default Frame3;
