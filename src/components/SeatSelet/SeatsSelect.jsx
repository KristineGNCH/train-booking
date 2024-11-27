import { useGetSeatsQuery } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../../reducers/vansParamsSlice";
import SeatsTrainDesc from "./SeatsTrainDesc";
import SeatsTicketQty from "./SeatsTicketQty";
import Error from "../Modal/Error/Error";
import Loading from "../Modal/Loading/Loading";
import VanType from "./VanType";
import Vans from "./Vans";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./seatsSelect.css";

export default function SeatsSelect() {
  const dispatch = useDispatch();
  const typeVan = useSelector((state) => state.vansParamsSlice.typeVan);
  const args = useSelector((state) => state.seatsParamsSlice);
  const {
    currentData: result,
    isError,
    isFetching,
  } = useGetSeatsQuery(args.req);

  useEffect(() => {
    if (result) {
      dispatch(setResult(result));
    }
  }, [result, dispatch]);

  if (isError) {
    return (
      <Error
        message="Unable to load seats. Please try again."
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (isFetching) {
    return <Loading message="Loading available seats..." />;
  }

  const { item } = args.data;

  return (
    <section className="seats-content">
      <h1 className="seats-title">Выбор мест</h1>
      <div className="seats-select_departure">
        <div className="seats-select_departure_header">
          <span className="seats_departure-vector"></span>
          <button className="change-other-train_button">
            Выбрать другой поезд
          </button>
        </div>
        <SeatsTrainDesc item={item} />
        <SeatsTicketQty data={result} />
        <section>
          <VanType />
          {typeVan !== "" ? <Vans /> : null}
        </section>
      </div>
      <NavLink to={"/passengers/"} style={{ textDecoration: "none" }}>
        <button className="next-button">Далее</button>
      </NavLink>
    </section>
  );
}