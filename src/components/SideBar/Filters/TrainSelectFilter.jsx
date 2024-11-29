import { useDispatch } from "react-redux";
import React, { useState } from "react";
import PriceFilter from "./PriceFilter";

import { setOneParam } from "../../../reducers/routesParamsSlice";
import { vanClasses } from "../../../service/dataTransform";
import { DepartureFilter } from "./DepartureFilter";

import "./../SideBar.css";

const TrainSelectFilter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleChangeTypeVan = (evt) => {
    const { value, checked } = evt.target;
    const keyMap = {
      [vanClasses.second]: "have_second_class",
      [vanClasses.first]: "have_first_class",
      [vanClasses.third]: "have_third_class",
      [vanClasses.fourth]: "have_fourth_class",
      have_wifi: "have_wifi",
      is_express: "is_express",
    };

    if (keyMap[value]) {
      dispatch(setOneParam({ key: keyMap[value], value: checked }));
    }
  };

  return (
    <>
      <section className="filters">
        <div className="filters-container">
          <div className="dateFilter">
            <div className="dateFilter_departure">
              <h2 className="dateFilter_departure_title">Дата поездки</h2>
              <input
                type="date"
                className="dateFilter_input filter_departure-date"
                placeholder="ДД/ММ/ГГ"
                onChange={(evt) => {
                  dispatch(
                    setOneParam({ key: "date_start", value: evt.target.value })
                  );
                }}
              />
            </div>
            <div className="dateFilter_departure-back">
              <h2 className="dateFilter_departure_title">Дата возвращения</h2>
              <input
                type="date"
                className="dateFilter_input filter_departure-date-back"
                placeholder="ДД/ММ/ГГ"
                onChange={(evt) => {
                  dispatch(
                    setOneParam({ key: "date_end", value: evt.target.value })
                  );
                }}
              />
            </div>
          </div>
          <div className="options">
            <ul className="options-list">
              <li>
                <span className="coupe-vector"></span>
                <p>Купе</p>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      value={vanClasses.second}
                      onClick={(evt) => handleChangeTypeVan(evt)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="platzKarte-vector"></span>
                <p>Плацкарт</p>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      value={vanClasses.third}
                      onClick={(evt) => handleChangeTypeVan(evt)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="seat-vector"></span>
                <p>Сидячий</p>
                <div>
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider round"
                      value={vanClasses.fourth}
                      onClick={(evt) => handleChangeTypeVan(evt)}
                    ></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="luxury-vector"></span>
                <p>Люкс</p>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      value={vanClasses.first}
                      onClick={(evt) => handleChangeTypeVan(evt)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="wifi-vector"></span>
                <p>Wi-Fi</p>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      value="have_wifi"
                      onClick={(evt) => handleChangeTypeVan(evt)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
              <li>
                <span className="express-vector"></span>
                <p>Экспресс</p>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      value="is_express"
                      onClick={(evt) => handleChangeTypeVan(evt)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <PriceFilter />
          <DepartureFilter />
        </div>
        <div className="departure-back_time-filters_container">
          <div className="time-filter_title-container">
            <h2 className="time-filter-main_title">
              <span className="arrival-vector"></span>Обратно
            </h2>
            <span className="closeUP-vector" onClick={toggleVisibility}></span>
          </div>

          {isVisible && (
            <>
              <div className="departure-time">
                <h3 className="time-filter-title">Время отбытия</h3>
                <div className="circle-container time-container">
                  <div
                    className="time-circle-1"
                    draggable="true"
                    style={{ left: "0px" }}
                  ></div>
                  <div className="timeline-gray"></div>
                  <div
                    className="timeline-colored"
                    style={{ left: "2px", right: "128px" }}
                  ></div>
                  <div
                    className="time-circle-2"
                    draggable="true"
                    style={{ left: "155px" }}
                  ></div>
                </div>
                <div className="cost-container time-container">
                  <div className="start-cost" style={{ left: "0px" }}>
                    0:00
                  </div>
                  <div className="limit-cost" style={{ left: "103px" }}>
                    11:00
                  </div>
                  <div className="max-cost">24:00</div>
                </div>
              </div>

              <div className="arrival-time">
                <h3 className="time-filter-title arrival-title">
                  Время прибытия
                </h3>
                <div className="circle-container time-container">
                  <div
                    className="time-circle-1"
                    draggable="true"
                    style={{ left: "50px" }}
                  ></div>
                  <div className="timeline-gray"></div>
                  <div
                    className="timeline-colored"
                    style={{ left: "52px", right: "128px" }}
                  ></div>
                  <div
                    className="time-circle-2"
                    draggable="true"
                    style={{ left: "155px" }}
                  ></div>
                </div>
                <div className="cost-container time-container">
                  <div className="start-cost" style={{ left: "50px" }}>
                    5:00
                  </div>
                  <div className="limit-cost" style={{ left: "103px" }}>
                    11:00
                  </div>
                  <div className="max-cost">24:00</div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default TrainSelectFilter;
