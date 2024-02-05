import React from 'react';
import './RegErr.css'; // Подключаем стили

const RegistrationError = ({ onClose, errorMessage }) => {
  return (
    <div className="registration-error-overlay">
      <div className="registration-error-container">
        <h2 className="registration-error-title">Помилка реєстрації</h2>
        <p className="registration-error-message">{errorMessage}</p>
        <button className="registration-error-close-btn" onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default RegistrationError;
