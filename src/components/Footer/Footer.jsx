import React, { useState } from 'react';
import { createRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

import phone from "../../assets/svg/Phone.svg";
import mail from "../../assets/svg/Mail.svg";
import skype from "../../assets/svg/Skype.svg";
import point from "../../assets/svg/Point.svg";
import youtube from "../../assets/svg/youtube.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/in.svg";
import google from "../../assets/svg/google.svg";
import up from "../../assets/svg/up.svg";

export default function Footer() {
  const ref = createRef();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onPost = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const response = await postEmail(email);

    if (response && response.status) {
      setSuccessMessage("Вы успешно подписаны на рассылку!");
    } else {
      setErrorMessage("Ошибка. Что-то пошло не так.");
    }

    setLoading(false);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <div className="footer-main__contacts" id="contacts">
          <h3 className="footer-main_title">Свяжитесь с нами</h3>
          <ul className="footer-main__contacts__items">
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={phone}
                alt="phone"
              />
              <span className="footer-main__contacts__item__desc">
                8 (800) 000 00 00
              </span>
            </li>
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={mail}
                alt="mail"
              />
              <span className="footer-main__contacts__item__desc">
                inbox@mail.ru
              </span>
            </li>
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={skype}
                alt="skype"
              />
              <span className="footer-main__contacts__item__desc">
                tu.train.tickets
              </span>
            </li>
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={point}
                alt="address"
              />
              <span className="footer-main__contacts__item__desc address">
                г. Москва ул. Московская 27-35 555 555
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-main__subscribe">
          <h3 className="footer-main_title">Подписка</h3>
          <div className="footer-main__subscribe__item">
            <form onSubmit={onPost}>
              <label
                className="footer-main__subscribe__item__label"
                htmlFor="subscribe__form"
              >
                Будьте в курсе событий
              </label>
              <div className="input-button-wrapper">
                <input
                  type="email"
                  className="footer-main__subscribe__form-input"
                  placeholder="e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="footer-main__subscribe__send button-footer"
                  disabled={loading}
                >
                  {loading ? "Загрузка..." : "ОТПРАВИТЬ"}
                </button>
              </div>
            </form>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
          <div className="footer-main__subscribe__item">
            <span className="footer-main__subscribe__social-media">
              Подписывайтесь на нас
            </span>
            <div className="footer-main__subscribe__social-media-list">
              <ul className="social-media-list">
                <li className="social-media-list__item">
                  <img src={youtube} alt="youtube" className="icon-active" />
                </li>
                <li className="social-media-list__item">
                  <img src={facebook} alt="facebook" className="icon-active" />
                </li>
                <li className="social-media-list__item">
                  <img src={twitter} alt="twitter" className="icon-active" />
                </li>
                <li className="social-media-list__item">
                  <img src={linkedin} alt="linkedin" className="icon-active" />
                </li>
                <li className="social-media-list__item">
                  <img src={google} alt="google" className="icon-active" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main__line"></div>

      <div className="footer-logo container">
        <div className="footer__logo">Лого</div>
        <div className="logo-up">
          <HashLink smooth to="/#header">
            <img src={up} alt="button-UP" className="icon-active" />
          </HashLink>
        </div>
        <div className="copyright">2018 WEB</div>
      </div>
    </footer>
  );
}
