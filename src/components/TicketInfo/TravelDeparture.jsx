import { useSelector } from "react-redux"
import { showDate, showTime, showDuration } from '../../service/dataTransform'

export default function TravelDeparture() {
    const trainInfo = useSelector(state => state.seatsParamsSlice.data.item)

    return (
           <div className="travel-details-departure">
          <div className="travel-details_title-container">
            <h2 className="travel-details-main_title">
                  <span className="departure-vector"></span>Туда<span
                    className="travel-details-date"
                    >{showDate(trainInfo.departure.from.datetime)}</span>
                </h2>
            <span className="closeUP-vector"></span>
          </div>
          <p className="sidebar-train-number">
            <span className="sidebar-train-number-title">№ Поезда</span>116C
          </p>
          <div className="sidebar-train-name">
            <span className="sidebar-train-name-title">Название</span>
            <ul className="sidebar-train-name-list">
              <li>{trainInfo.departure.from.city.name}</li>
              <li>{trainInfo.departure.to.city.name}</li>
            </ul>
          </div>
          <div className="sidebar-train-shipment-scheme">
            <div className="sidebar-train-time-wrap">
              <div className="sidebar-train-shipment-scheme_departure-date">
                <span className="sidebar-train-departure-time">{showTime(trainInfo.departure.from.datetime)}</span>
                <span className="travel-details_departure-day">{showDate(trainInfo.departure.from.datetime)}</span>
              </div>
              <div className="travel-time-wrap">
                <span className="travel-time">{showDuration(trainInfo.departure.duration)}</span>
                <span className="travel-time-vector"></span>
              </div>
              <div className="sidebar-train-shipment-scheme_arrival-date">
                <span className="sidebar-train-departure-time">{showTime(trainInfo.departure.to.datetime)}</span>
                <span className="travel-details_arrival-day">{showDate(trainInfo.departure.to.datetime)}</span>
              </div>
            </div>
            <div className="sidebar-train-departure-wrap">
              <div className="sidebar-departure-point-wrap">
                <span className="sidebar-train-departure-point">{trainInfo.departure.from.city.name}</span>
                <span className="sidebar-train-departure-station">{trainInfo.departure.from.railway_station_name}</span
                    >
                  </div>
                  <div className="arrival-point-wrap">
                    <span className="sidebar-train-departure-point"
                      >{trainInfo.departure.to.city.name}</span
                    >
                    <span className="sidebar-train-departure-station"
                      >{trainInfo.departure.to.railway_station_name}</span
                    >
                  </div>
                </div>
              </div>
            </div>
    )
}