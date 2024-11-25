import React from "react";

export default function LastTrainItem({ item }) {
  if (!item || !item.departure) {
    return <div>Нет данных о поезде</div>;
  }

  return (
    <li className="overlooked-ticket">
      <div className="departure-point">
        <span className="point-name">{item.departure.from.city.name}</span>
        <span className="point-station">
          {item.departure.from.railway_station_name}
        </span>
      </div>
      <div className="arrival-point">
        <span className="point-name">{item.departure.to.city.name}</span>
        <span className="point-station">
          {item.departure.to.railway_station_name}
        </span>
      </div>
      <div className="train-comfort-props">
        <span className="comfort-props_vector">
          {item.departure.have_wifi && (
            <i
              className="bi bi-wifi comfort-props_vector_item"
              aria-label="Wi-Fi доступен"
            ></i>
          )}
          {item.departure.is_express && (
            <i
              className="bi bi-rocket-takeoff-fill comfort-props_vector_item"
              aria-label="Экспресс"
            ></i>
          )}
          {item.departure.have_air_conditioning && (
            <i
              className="bi bi-cup-fill comfort-props_vector_item"
              aria-label="Кондиционер"
            ></i>
          )}
        </span>
      </div>
      <div className="overlooked-ticket-price">
        от <span className="ticket-price">{item.min_price}</span>
        <span className="rub-vector">₽</span>
      </div>
    </li>
  );
}
