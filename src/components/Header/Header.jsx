/* eslint-disable react/no-unknown-property */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import { setParams } from "../../reducers/routesParamsSlice.js";
import { resetVans } from "../../reducers/vansParamsSlice.js";
import { resetRoutes } from "../../reducers/routesParamsSlice.js";
import { resetSeats } from "../../reducers/seatsParamsSlice.js";
import Nav from "./Nav";
import Datalist from "./Datalist";

import "react-calendar/dist/Calendar.css";
import "./header.css";

import point from "../../assets/svg/Point.svg";
import calendar from "../../assets/svg/Calendar.svg";
import rotate from "../../assets/svg/rotate.svg";

export default function Header() {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [dateTo] = useState("");
  const [dateBack] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [from_city_id, setFrom_city_id] = useState("");
  const [to_city_id, setTo_city_id] = useState("");
  const [loading] = useState(false);

  const handleChangeFrom = (evt) => {
    setValueFrom(evt.target.value);
  };

  const handleChangeTo = (evt) => {
    setValueTo(evt.target.value);
  };

  const setIdFrom = (id) => {
    setFrom_city_id(id);
  };

  const setIdTo = (id) => {
    setTo_city_id(id);
  };

  const setParamsinStore = async (evt) => {
    evt.preventDefault();
    try {
      dispatch(resetVans());
      dispatch(resetRoutes());
      dispatch(resetSeats());
      const request = {
        from_city_id: from_city_id,
        to_city_id: to_city_id,
        date_start: dateTo,
        date_end: dateBack,
      };
      await dispatch(setParams(request));
      navigate("/trainselect");
    } catch (error) {
      console.error("Ошибка при установке параметров:", error);
    }
  };

  const handleRotate = () => {
    setValueFrom((prev) => {
      const temp = prev;
      setValueFrom(valueTo);
      return valueTo;
    });
    setValueTo((prev) => {
      return valueFrom;
    });

    setFrom_city_id((prev) => {
      const temp = prev;
      setFrom_city_id(to_city_id);
      return to_city_id;
    });
    setTo_city_id((prev) => {
      return from_city_id;
    });
  };

  return (
    <header className="header" id="header">
      <Nav />
      <div className="header-container container">
        <div className="header__slogan">
          <h1 className="header__slogan_title">
            Вся жизнь - <b>путешествие!</b>
          </h1>
        </div>
        <div className="ticket">
          <form className="ticket-form" onSubmit={setParamsinStore}>
            <div className="header-form__direction">
              <h2 className="ticket-form__title">Направление</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form__input from_search"
                    placeholder="Откуда"
                    list="cities"
                    name="cities"
                    autoComplete="off"
                    value={valueFrom}
                    onChange={handleChangeFrom}
                    required
                  />
                  <datalist id="cities">
                    <Datalist arg={valueFrom} onClick={setIdFrom} />
                  </datalist>
                  <img className="header-form__icon" src={point} alt="image" />
                </div>
                <div className="rotate" onClick={handleRotate}>
                  <img src={rotate} alt="rotate" />
                </div>
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form__input where_search right"
                    placeholder="Куда"
                    list="citiesTo"
                    name="citiesTo"
                    autoComplete="off"
                    value={valueTo}
                    onChange={handleChangeTo}
                    required
                  />
                  <datalist id="citiesTo">
                    <Datalist arg={valueTo} onClick={setIdTo} />
                  </datalist>
                  <img className="header-form__icon" src={point} alt="image" />
                </div>
              </div>
            </div>

            <div className="header-form__date">
              <h2 className="ticket-form__title">Дата</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <div className="datepicker-wrapper">
                    <DatePicker
                      className="datepicker"
                      selected={departureDate}
                      onChange={(date) => setDepartureDate(date)}
                      placeholderText="ДД/ММ/ГГ"
                      minDate={new Date()}
                      popperPlacement="bottom"
                    />
                    <img
                      className="header-form__icon"
                      src={calendar}
                      alt="Календарь"
                    />
                  </div>
                </div>

                <div
                  className="rotate"
                  onClick={() => {
                    const tempDate = departureDate;
                    setDepartureDate(returnDate);
                    setReturnDate(tempDate);
                  }}
                >
                  <img src={rotate} alt="Изменить" />
                </div>

                <div className="header-form__item">
                  <div className="datepicker-wrapper">
                    <DatePicker
                      className="datepicker"
                      selected={returnDate}
                      onChange={(date) => setReturnDate(date)}
                      placeholderText="ДД/ММ/ГГ"
                      minDate={
                        departureDate ? new Date(departureDate) : new Date()
                      }
                      popperPlacement="bottom"
                    />
                    <img
                      className="header-form__icon"
                      src={calendar}
                      alt="Календарь"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="header-form__submit">
              <div className="header-form__item">
                <button
                  className="find-tickets__button"
                  onClick={setParamsinStore}
                  disabled={loading}
                >
                  Найти билеты
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
