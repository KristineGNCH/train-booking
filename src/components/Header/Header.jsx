/* eslint-disable react/no-unknown-property */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

import { setParams } from "../../reducers/routesParamsSlice.js";
import { resetVans } from "../../reducers/vansParamsSlice.js";
import { resetRoutes } from "../../reducers/routesParamsSlice.js";
import { resetSeats } from "../../reducers/seatsParamsSlice.js";
import Navigator from "./Nav";
import Datalist from "./Datalist";

import "react-calendar/dist/Calendar.css";
import "./header.css";

import point from "../../assets/svg/Point.svg";
import calendar from "../../assets/svg/Calendar.svg";
import rotate from "../../assets/svg/rotate.svg";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");

  const [from_city_id, setFrom_city_id] = useState("");
  const [to_city_id, setTo_city_id] = useState("");
  const [dateTo] = useState("");
  const [dateBack] = useState("");

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

  const setParamsinStore = (evt) => {
    evt.preventDefault();
    dispatch(resetVans());
    dispatch(resetRoutes());
    dispatch(resetSeats());
    const request = {
      from_city_id: from_city_id,
      to_city_id: to_city_id,
      date_start: dateTo,
      date_end: dateBack,
    };
    dispatch(setParams(request));

    navigate("/trainselect");
  };

  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <header className="header">
      <Navigator />

      <div className="header-container container">
        <div className="header__slogan">
          <h1>
            Вся жизнь - <b>путешествие!</b>
          </h1>
        </div>

        <div className="ticket">
          <form className="ticket-form">
            <div className="header-form__direction">
              <h2 className="ticket-form__head">Направление</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form__input from_search"
                    placeholder="Откуда"
                    list="cities"
                    name="cities"
                    autoсomplete="off"
                    value={valueFrom}
                    onChange={handleChangeFrom}
                    required
                  />
                  <datalist id="cities">
                    {<Datalist arg={valueFrom} onClick={setIdFrom} />}
                  </datalist>
                  <img className="header-form__icon" src={point} alt="image" />
                </div>
                <div className="rotate">
                  <img src={rotate} alt="rotate" />
                </div>
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form__input where_search right"
                    placeholder="Куда"
                    list="citiesTo"
                    name="citiesTo"
                    autoсomplete="off"
                    value={valueTo}
                    onChange={handleChangeTo}
                    required
                  />
                  <datalist id="citiesTo">
                    {<Datalist arg={valueTo} onClick={setIdTo} />}
                  </datalist>
                  <img className="header-form__icon" src={point} alt="image" />
                </div>
              </div>
            </div>
            <div className="header-form__date">
              <h2 className="ticket-form__head">Дата</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <div className="datepicker">
                    <Calendar onChange={onChange} value={value} />
                    <div className="datepicker__wrapper"></div>
                  </div>
                  <img
                    className="header-form__icon"
                    src={calendar}
                    alt="image"
                  />
                </div>
                <div className="rotate"></div>
                <div className="header-form__item">
                  <div className="datepicker">
                    <Calendar onChange={onChange} value={value} />
                    <div className="datepicker__wrapper"></div>
                  </div>
                  <img
                    className="header-form__icon"
                    src={calendar}
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="header-form__submit">
              <div className="header-form__item">
                <button
                  className="find-tickets__button right"
                  onClick={setParamsinStore}
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
