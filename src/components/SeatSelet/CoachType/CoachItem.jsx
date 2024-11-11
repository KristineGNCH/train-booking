import { useSelector } from "react-redux";
import { Facilities } from "./Facilities.jsx";
import CoachClass from "./CoachType";

export default function CoachItem({ item }) {


  return (
    <div className="seat-select-form">
      <div className="big-Coach-num">
        <p className="big-num">{`0${item.coach._id.slice(-1)}`}</p>
        <p>вагон</p>
      </div>
      <div className="Coach-description">
        <div className="seats-positions">
          <h3>
            Места{" "}
            <span className="available-seats">
              {item.coach.available_seats}
            </span>
          </h3>
          <CoachClass item={item} />
        </div>
        <div className="seats-prices">
          <h3>Стоимость</h3>
          {item.coach.side_price > 0 ? (
            <p className="seats-price">
              {item.coach.side_price}
              <span className="rub-vector-small"></span>
            </p>
          ) : null}

          {item.coach.top_price > 0 ? (
            <p className="seats-price">
              {item.coach.top_price}
              <span className="rub-vector-small"></span>
            </p>
          ) : null}
        </div>
        <div className="Coach-facilities">
          <h3>
            Обслуживание <span className="service-company-name">ФПК</span>
          </h3>
          <Facilities item={item} />
        </div>
      </div>
    </div>
  );
}
