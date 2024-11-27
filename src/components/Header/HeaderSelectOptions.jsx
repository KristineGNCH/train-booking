import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import BreadCrums from "./BreadCrums/BreadCrums";
import Datalist from "./Datalist";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import { setParams } from "../../reducers/routesParamsSlice";
import { resetVans } from "../../reducers/vansParamsSlice.js";
import { resetRoutes } from "../../reducers/routesParamsSlice.js";
import { resetSeats } from "../../reducers/seatsParamsSlice.js";
import "./header.css";

import point from "../../assets/svg/Point.svg";
import calendar from "../../assets/svg/Calendar.svg";
import rotate from "../../assets/svg/rotate.svg";

export default function HeaderSelectOptions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");

  const [from_city_id, setFrom_city_id] = useState("");
  const [to_city_id, setTo_city_id] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
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

    setValueTo((prev) => from_city_id);

    setFrom_city_id((prev) => {
      const temp = prev;
      setFrom_city_id(to_city_id);
      return to_city_id;
    });
    setTo_city_id((prev) => from_city_id); 
  };

  return (
    <header className="header-trainselect-small">
      <div className="header-trainselect-small-image">
        <Nav />

        <div className="ticket-small main-container">
          <form className="ticket-form-small" onSubmit={setParamsinStore}>
            <div className="header-form-small__direction">
              <h2 className="ticket-form-small__title">Направление</h2>
              <div className="header-form__items">
                <div className="header-form__item">
                  <input
                    type="text"
                    className="ticket-form-small__input from_search"
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
                    className="ticket-form-small__input where_search right"
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

            <div className="header-form-small__date">
              <h2 className="ticket-form-small__title">Дата</h2>
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
              <div className="header-form__submit">
                <div className="header-form__item">
                  <button
                    className="find-tickets__button"
                    onClick={setParamsinStore}
                    // disabled={loading}
                  >
                    Найти билеты
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <BreadCrums />
    </header>
  );
}
