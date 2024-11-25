import * as React from "react";
import "./Error.css";

export default function Error({
  message = "По вашему запросу ничего не найдено.",
  onRetry,
}) {
  return (
    <div className="error-block__wrapper">
      <div className="error-block-header">
        <span className="error-block-header_exclamation-mark"></span>
        </div>
        <div className="error-block-main">
          
          <h2 className="error-block-title">Ошибка</h2>
          <p className="error-block-message">{message}</p>
          </div>
          <div className="error-block-footer">
            <span className="error-block-footer-line"></span>
          <button className="error-block__button" onClick={onRetry}>
            Попробовать снова
          </button>
          </div>
      </div>
    
  );
}
