import { useSelector } from "react-redux";

export default function PassengersAside() {
  const seatsCheck = useSelector((state) => state.seatsParamsSlice.seats);

  const seatsCount = (name) => {
    let arr = seatsCheck.filter((elem) => elem.category === name);
    return arr === -1 ? 0 : arr.length;
  };

  const priceCount = (name) => {
    let res = seatsCheck
      .filter((elem) => elem.category === name)
      .reduce((sum, current) => sum + current.price, 0);
    return res;
  };

  return (
    <div className="passengers-count-container">
      <div className="travel-details_title-container">
        <h2 className="travel-details-main_title">
          <span className="passenger-vector"></span>Пассажиры
        </h2>
        <span className="closeUP-vector"></span>
      </div>
      <div className="count-list-wrap">
        <div className="passengers-count-total">
          <p>{seatsCount("adult")} Взрослых</p>
          <p>{seatsCount("kids")} Ребенок</p>
        </div>
        <div className="passengers-price-total">
          <p>
            {priceCount("adult")}
            <span className="rub-vector-small"></span>
          </p>
          <p>
            {priceCount("kids")}
            <span className="rub-vector-small"></span>
          </p>
        </div>
      </div>
      <div className="total">
        <p>Итог</p>
        <span className="total-price">
          {priceCount("adult") + priceCount("kids")}
          <span className="rub-vector"></span>
        </span>
      </div>
    </div>
  );
}
