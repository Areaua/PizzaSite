import React from 'react';
import './Reg.css'; // Подключаем стили

const RegistrationSuccess = ({ onClose }) => {
  return (
    <div className="registration-success-overlay">
      <div className="registration-success-container">
        <h2 className="registration-success-title">Реєстрація успішна!</h2>
        <p className="registration-success-message">
          Ваш аккаунт був успішно зареєстрований. Теперь ви можете увійти.
        </p>
        <button className="registration-success-close-btn" onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
