
export default function LastTrainsItem({ item }) {

    return (
        <li className="overlooked-ticket">
          <div className="departure-point">
                <span className="point-name">{item.departure.from.city.name}</span>
            <span className="point-station">{item.departure.from.railway_station_name}</span>
          </div>
          <div className="arrival-point">
            <span className="point-name">{item.departure.to.city.name}</span>
            <span className="point-station">{item.departure.to.railway_station_name}</span>
          </div>
            <div className="train-comfort-props">
                <span className="comfort-props_vector">
                    {item.departure.have_wifi ? (<i className="bi bi-wifi comfort-props_vector_item"></i>) : null}
                    {item.departure.is_express ? (<i className="bi bi-rocket-takeoff-fill comfort-props_vector_item"></i>) : null}
                    {item.departure.have_air_conditioning ? (<i className="bi bi-cup-fill comfort-props_vector_item"></i>) : null}
                 </span>
          </div>
          <div className="overlooked-ticket-price">
            oт <span className="ticket-price">{item.min_price}</span>
            <span className="rub-vector"></span>
          </div>
        </li>
    )
}