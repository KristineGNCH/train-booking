import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../reducers/seatsParamsSlice";

export default function SeatsTicketQty({ data }) {
  const dispatch = useDispatch();
  const seatsCheck = useSelector((state) => state.seatsParamsSlice.seats);
  const category = useSelector((state) => state.seatsParamsSlice.category);

  const styleCount = (name) => {
    if (category === name) {
      return "active-count";
    } else {
      return null;
    }
  };

  const handleClick = (name) => {
    dispatch(setCategory(name));
  };

  const seatsCount = (name) => {
    const arr = seatsCheck.filter((elem) => elem.category === name);
    return arr === -1 ? 0 : arr.length;
  };

  return (
    <section>
      <h2 className="ticket-count-title">Количество билетов</h2>
      <div className="ticket-count-container">
        <div
          className={`ticket-count ${styleCount("adult")} adult`}
          onClick={() => handleClick("adult")}
        >
          <div className="count-screen">
            {/* <!-- тут разместить шаблон {`Взрослых-${props.name.num}`}--> */}
            <p>Взрослых - {seatsCount("adult")}</p>
          </div>
          <p className="seat-description">Можно добавить еще 3 пассажиров</p>
        </div>

        <div
          className={`ticket-count ${styleCount("kids")} kids`}
          onClick={() => handleClick("kids")}
        >
          <div className="count-screen">
            <p>Детских - {seatsCount("kids")}</p>
          </div>
          <p className="seat-description">
            Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
            взрослых, но дешевле в среднем на 50-65%
          </p>
        </div>

        <div
          className={`ticket-count ${styleCount(
            "kidsWithoutSeats"
          )} kidsWithoutSeats`}
          onClick={() => handleClick("kidsWithoutSeats")}
        >
          <div className="count-screen">
            <p>Детских «без места» — {seatsCount("kidsWithoutSeats")}</p>
          </div>
          <p className="seat-description"></p>
        </div>
      </div>
    </section>
  );
}