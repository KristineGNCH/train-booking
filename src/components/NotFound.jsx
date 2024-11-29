import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"; 

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, мы не смогли найти запрашиваемую страницу.</p>
      <button onClick={handleGoHome}>Вернуться на главную</button>
    </div>
  );
};

export default NotFound;
