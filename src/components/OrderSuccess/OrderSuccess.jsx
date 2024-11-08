import { useDispatch, useSelector } from "react-redux";
import { resetCoach } from "../../reducers/coachParamsSlice";
import { resetRoutes } from "../../reducers/routesParamsSlice";
import { resetSeats } from "../../reducers/seatsParamsSlice";
import { useNavigate } from "react-router-dom";
import SuccesOrderHeader from "../../components/Header/SuccesorderHeader";
import "./OrderSuccess.css";

export default function Successfulorder() {
  const personalData = useSelector(
    (state) => state.seatsParamsSlice.personalData
  );
  const seats = useSelector((state) => state.seatsParamsSlice.seats);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backMainPage = () => {
    navigate("/");
    dispatch(resetCoach());
    dispatch(resetRoutes());
    dispatch(resetSeats());
  };

  const priceCount = (name) => {
    let res = seats
      .filter((elem) => elem.category === name)
      .reduce((sum, current) => sum + current.price, 0);
    return res;
  };

  return (
    <>
      <SuccesOrderHeader />

      <main className="order-end_main-container container">
        <section className="order-end_content-wrap">
          <div className="order-end_content">
            <div className="order-end_title">
              <span className="order-end_order-number">№ Заказа: 285АА</span>
              <div className="order-end_total-price-wrap">
                <span className="order-end_total-price">сумма</span>
                <span className="order-end_total-price-sum">
                  {priceCount("adult") + priceCount("kids")}
                </span>
                <span className="rub-vector">
                  <svg
                    width="21"
                    height="27"
                    viewBox="0 0 21 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25059 16.2068C5.25059 17.114 5.25059 18.0033 5.25059 18.9033C7.43483 18.9033 9.61208 18.9033 11.7998 18.9033C11.7998 19.8069 11.7998 20.6998 11.7998 21.607C9.61908 21.607 7.43833 21.607 5.25059 21.607C5.25059 23.4107 5.25059 25.1999 5.25059 27C4.37199 27 3.50389 27 2.62179 27C2.62179 25.2071 2.62179 23.4143 2.62179 21.6142C1.7432 21.6142 0.878598 21.6142 0.00350039 21.6142C0.00350039 20.7106 0.00350039 19.8177 0.00350039 18.9105C0.871597 18.9105 1.73969 18.9105 2.61129 18.9105C2.61129 18.0069 2.61129 17.1176 2.61129 16.214C1.74319 16.214 0.875098 16.214 0 16.214C0 15.3068 0 14.4139 0 13.5103C0.868097 13.5103 1.73619 13.5103 2.61479 13.5103C2.61479 9.00655 2.61479 4.51359 2.61479 0.0134289C2.6673 0.00982873 2.7023 0.0062286 2.74081 0.0062286C6.2412 0.0062286 9.74159 -0.011772 13.242 0.0134289C15.2617 0.0278294 17.0189 0.787457 18.4961 2.20591C19.7352 3.39395 20.5333 4.8484 20.8483 6.56206C21.2859 8.94895 20.7748 11.127 19.3397 13.0567C18.3561 14.3815 17.0714 15.296 15.5312 15.818C14.7787 16.0736 14.0051 16.2068 13.214 16.2068C10.6132 16.2104 8.0159 16.2068 5.41511 16.2104C5.3626 16.2068 5.31009 16.2068 5.25059 16.2068ZM5.25409 2.70633C5.25409 6.31726 5.25409 9.91019 5.25409 13.5067C5.29259 13.5067 5.3241 13.5067 5.3556 13.5067C7.98089 13.5067 10.6062 13.5139 13.2315 13.4995C13.6375 13.4959 14.0541 13.4347 14.4461 13.3303C17.2219 12.5743 18.8706 9.76618 18.2405 6.89688C17.7015 4.44879 15.5802 2.70633 13.137 2.70633C10.5642 2.70633 7.99139 2.70633 5.41861 2.70633C5.3661 2.70633 5.31359 2.70633 5.25409 2.70633Z"
                      fill="#928F94"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="order-end_faq">
              <div className="faq-vector-container">
                <span className="faq-vector first"></span>
                <h3>Билеты будут отправлены на ваш e-mail</h3>
              </div>
              <div className="faq-vector-container">
                <span className="faq-vector second"></span>
                <h3>Распечатайте и сохраняйте билеты до даты поездки</h3>
              </div>
              <div className="faq-vector-container">
                <span className="faq-vector last"></span>
                <h3>Предьявите распечатанные билеты при посадке</h3>
              </div>
            </div>
            <div className="order-end_message">
              <span className="message-client_name">
                {personalData.firstName} {personalData.middleName}!
              </span>

              <span className="message-main_text">
                Ваш заказ успешно оформлен.
                <br />В ближайшее время с вами свяжется наш оператор для
                подтверждения.
              </span>
              <span className="message-end_of_message">
                Благодарим Вас за оказанное доверие и желаем приятного
                путешествия!
              </span>
            </div>
            <div className="order-end_assessment">
              <div className="assessment_list-wrap">
                <span className="assessment_title">Оценить сервис</span>
                <ul className="assessment_list">
                  <li className="star-vector">
                    <svg
                      width="46"
                      height="44"
                      viewBox="0 0 46 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                  <li className="star-vector">
                    <svg
                      width="46"
                      height="44"
                      viewBox="0 0 46 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                  <li className="star-vector">
                    <svg
                      width="46"
                      height="44"
                      viewBox="0 0 46 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                  <li className="star-vector">
                    <svg
                      width="46"
                      height="44"
                      viewBox="0 0 46 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                  <li className="star-vector">
                    <svg
                      width="46"
                      height="44"
                      viewBox="0 0 46 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <button className="back-to-main" onClick={() => backMainPage()}>
                Вернуться на главную
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
