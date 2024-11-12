import { showTime, showDurationHours, showDurationMinutes, } from "../../service/dataTransform"

export default function SeatsTrainDesc({ item }) {

    return (
        <div className="seats_train-description-wrap">
          <div className="seats_train-description">
            <span className="train-vector-small"></span>
            <div className="seats_train-route-wrap">
              <p className="seats_train-number">116С</p>
              <ul className="seats_train-route">
              <li>{item.departure.from.city.name }<span className="arrow-vector"></span></li>
              <li>{ item.departure.from.city.name}<span className="arrow-vector"></span></li>
                <li>{ item.departure.to.city.name}</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="seats_train-shipment-scheme">
              <div className="train-departure-time-wrap">
              <span className="train-departure-time"> {showTime(item.departure.from.datetime)}</span>
                <span className="train-departure-point">{ item.departure.from.city.name}</span>
                <span className="train-departure-station">{ item.departure.from.railway_station_name}</span>
              </div>
              <span className="seats_travel-time-vector"></span>
              <div className="train-arrival-time">
                <span className="train-departure-time">{showTime(item.departure.to.datetime)}</span>
                        <span className="train-departure-point">{item.departure.to.city.name}</span>
                <span className="train-departure-station">{item.departure.to.railway_station_name}</span>
              </div>
            </div>
          </div>
          <div className='seats_travel-time'>
            <span className="clockworkOrange-vector"></span>
            <div className='travel-time_wrap'>
              <p className="travel-hours">{showDurationHours(item.departure.duration)} часов</p>
            <p className="travel-minutes">{showDurationMinutes(item.departure.duration) } минуты</p>
            </div>
          </div>
        </div>
         
    )
}