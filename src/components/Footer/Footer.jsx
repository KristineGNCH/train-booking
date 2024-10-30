import { postEmail } from "../../api/api";
import { createRef } from "react";
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
import up from "../../assets/svg/up.svg"

export default function Footer() {
  const ref = createRef();

  const onPost = (evt) => {
    evt.preventDefault();
    postEmail(evt.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-main__contacts" id="contacts">
          <h3 className="footer-main_title">Свяжитесь с нами</h3>
          <ul className="footer-main__contacts__items">
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={phone}
                alt="image"
              />
              <span className="footer-main__contacts__item__desc">
                8 (800) 000 00 00
              </span>
            </li>
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={mail}
                alt="image"
              />
              <span className="footer-main__contacts__item__desc">
                inbox@mail.ru
              </span>
            </li>
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={skype}
                alt="image"
              />
              <span className="footer-main__contacts__item__desc">
                tu.train.tickets
              </span>
            </li>
            <li className="footer-main__contacts__item">
              <img
                className="footer-main__contacts__item__img"
                src={point}
                alt="image"
              />
              <span className="footer-main__contacts__item__adress">
                г. Москва ул. Московская 27-35 555 555
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-main__subscribe">
          <h3 className="footer-main_head">Подписка</h3>
          <div className="footer-main__subscribe__item">
            <form
              action="footer-main__subscribe__form"
              id="subscribe__form"
              method="post"
            >
              <label
                className="footer-main__subscribe__item__label"
                htmlFor="subscribe__form"
              >
                Будьте в курсе событий
              </label>
              <div className="input-btn-wrapper">
                <input
                  type="email"
                  className="footer-main__subscribe__form-input"
                  placeholder="e-mail"
                  ref={ref}
                />
                <button
                  className="footer-main__subscribe__send btn-footer"
                  onClick={(evt) => onPost(evt)}
                >
                  ОТПРАВИТЬ
                </button>
              </div>
            </form>
          </div>
          <div className="footer-main__subscribe__item">
            <span className="footer-main__subscribe__social-media">
              Подписывайтесь на нас
            </span>
            <div className="footer-main__subscribe__social-media-list">
              <ul className="social-media-list">
                <li className="social-media-list__item">
                  <img
                    src={youtube}
                    alt="image"
                    className="icon-active"
                  />
                </li>
                <li className="social-media-list__item">
                  <img
                    src={facebook}
                    alt="image"
                    className="icon-active"
                  />
                </li>
                <li className="social-media-list__item">
                  <img
                    src={twitter}
                    alt="image"
                    className="icon-active"
                  />
                </li>
                <li className="social-media-list__item">
                  <img
                    src={linkedin}
                    alt="image"
                    className="icon-active"
                  />
                </li>
                <li className="social-media-list__item">
                  <img
                    src={google}
                    alt="image"
                    className="icon-active"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main__line"></div>

      <div className="footer-logo container">
        <div className="footer__logo__logo">Лого</div>
        <div className="logo-up">
          <img src={up} alt="button-UP" className="icon-active" />
        </div>
        <div className="copyright">2018 WEB</div>
      </div>
    </footer>
  );
}
