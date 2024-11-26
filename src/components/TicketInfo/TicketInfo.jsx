import { useSelector } from "react-redux";
import TravelDeparture from "./TravelDeparture";
import TravelDepartureBack from "./TraveldepartureBack";
import PassengersAside from "./PassengersAside";
import "./ticketInfo.css";

export default function TicketInfo() {
  const trainInfo = useSelector((state) => state.seatsParamsSlice.data.item);

  return (
    <section className="travel-details">
      <h2 className="travel-details-title">Детали поездки</h2>
      <TravelDeparture />
      {trainInfo.arrival ? <TravelDepartureBack /> : null}
      <PassengersAside />
    </section>
  );
}
