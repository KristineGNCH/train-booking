/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Calendar from "react-calendar";

import Nav from "./Nav";
import Datalist from "./Datalist";

import "./header.css";

import point from "../../assets/svg/Point.svg";
import calendar from "../../assets/svg/Calendar.svg";
import rotate from "../../assets/svg/rotate.svg";



export default function MainSearchTickets() {


  const dispatch = useDispatch();
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");

  const [from_city_id, setFrom_city_id] = useState("");
  const [to_city_id, setTo_city_id] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [dateBack, setDateBack] = useState("");

  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }

  const handleChangeFrom = (evt) => {
    setValueFrom(evt.target.value);
  };

  const handleChangeTo = (evt) => {
    setValueTo(evt.target.value);
  };

  const handledDateTo = (evt) => {
    setDateTo(evt.target.value);
  };

  const handledDateBack = (evt) => {
    setDateBack(evt.target.value);
  };

  const setIdFrom = (id) => {
    setFrom_city_id(id);
  };

  const setIdTo = (id) => {
    setTo_city_id(id);
  };

  const setParamsinStore = (evt) => {
    evt.preventDefault();
    const request = {
      from_city_id: from_city_id,
      to_city_id: to_city_id,
      date_start: dateTo,
      date_end: dateBack,
    };
    dispatch(setParams(request));
  };

  return (
    <header className="header-ticketsearch">
      <div className="header-ticketsearch-image">
        <Nav />
        <div className="ticketSelect_header-content">
          <div className="ticketSelect_header-content_search-form-wrapper">
            <form className="ticketSelect_header-content_search-form">
              <div className="ticketSelect__header-form__direction">
                <h2 className="ticket-form__title">Направление</h2>
                <div className="ticketSelect__header-form__items">
                  <div className="ticket-select__header-form__item">
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
                    <img
                      className="header-form__icon"
                      src={point}
                      alt="image"
                    />
                  </div>
                  <div className="rotate">
                    <img src={rotate} alt="image" />
                  </div>
                  <div className="ticket-select__header-form__item">
                    <input
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
                    <img
                      className="header-form__icon"
                      src={point}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="ticketSelect__header-form__date">
                <h2 className="ticket-form__title">Дата</h2>
                <div className="header-form__items">
                  <div className="ticket-select__header-form__item">
                    <div className="datepicker">
                      <input
                        type="date"
                        className="ticket-form__input departure-date"
                        placeholder="ДД/ММ/ГГ"
                        onChange={handledDateTo}
                      />
                      <div className="datep-search__wrapper">
                        <Calendar onChange={onChange} value={value} />
                      </div>
                    </div>
                    <img
                      className="header-form__icon"
                      src={calendar}
                      alt="calendar"
                    />
                  </div>
                  <div className="rotate"></div>
                  <div className="train-select__header-form__item">
                    <div className="datepicker">
                      <input
                        type="date"
                        className="ticket-form__input departure-date-back right"
                        placeholder="ДД/ММ/ГГ"
                        onChange={handledDateBack}
                      />
                      <div className="datepicker__wrapper">
                        <Calendar onChange={onChange} value={value} />
                      </div>
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
                <div className="ticket-select__header-form__item">
                  <button
                    className="find-tickets right"
                    onClick={setParamsinStore}
                  >
                    Найти билеты
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
