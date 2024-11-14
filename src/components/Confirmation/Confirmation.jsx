import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import {
  showTime,
  showDuration,
  showSeats,
  showPrice,
} from "../../service/dataTransform";
import { useAddNewOrderMutation } from "../../api/api";
import PassItem from "../../components/Confirmation/PassItem";
import "./confirmation.css";

export default function Confirmation() {
  const [addNewOrder, response] = useAddNewOrderMutation()
  const navigate = useNavigate();

  const data = useSelector((state) => state.seatsParamsSlice.data).item;
  const seats = useSelector((state) => state.seatsParamsSlice.seats);
  const personalData = useSelector((state) => state.seatsParamsSlice.personalData)

  const createSendInfo = () => {
    const body = {
      user: {
          first_name : personalData.firstName,
          last_name: personalData.surname,
          patronymic: personalData.middleName,
          phone: personalData.phone,
          email: personalData.email,
          payment_method: personalData.payWay.payMethod
      },
      departure: {
       route_direction_id: data.departure._id,
        seats: [seats.map((item, index) => {
          return {
              coach_id: data.departure.train._id,
            person_info: {
                is_adult: item.category === 'adult' ? true : false,
                first_name: item['first-name_title'],
                last_name: item['last-name_title'],
                patronymic: item['middle-name_title'],
                gender: true,
                birthday: item.date,
                document_type: "паспорт",
                document_data: `${item.passSeria} ${item.passNum}`
              },
              seat_number: item.num,
              is_child: item.category === 'child' ? true : false,
              include_children_seat: item.category === 'child' ? true : false,
            }
          })
          ]
      }

    }
    return body
  }


  const onSubmitOrder = (evt) => {
    evt.preventDefault()
    const dataInfo = createSendInfo()
    addNewOrder(dataInfo).unwrap().then(response => {
      if (response.status) {
        navigate("/successfulorder")
      } else {
        alert('Повторите отправку формы позже')
      }
    })
   }




  const priceCount = (name) => {
    let res = seats
      .filter((elem) => elem.category === name)
      .reduce((sum, current) => sum + current.price, 0);
    return res;
  };

  return (
    <section className="confim-order_main-container">
      <div className="train-wrap">
        <h1>Поезд</h1>
        <li className="train in-conf">
          <div className="train-description-wrap">
            <div className="train-description">
              <span className="train-vector"></span>
              <p className="train-number">116С</p>
              <ul className="train-route">
                <li>
                  {data.departure.from.city.name}
                  <span className="arrow-vector"></span>
                </li>
                <li>
                  {data.departure.from.city.name}
                  <span className="arrow-vector"></span>
                </li>
                <li>{data.departure.to.city.name}</li>
              </ul>
            </div>
          </div>
          <div className="train-travel_time-scheme-wrap">
            <div className="train-shipment-scheme">
              <div className="train-departure-time-wrap">
                <span className="train-departure-time">
                  {showTime(data.departure.from.datetime)}
                </span>
                <span className="train-departure-point">
                  {data.departure.from.city.name}
                </span>
                <span className="train-departure-station">
                  {data.departure.from.railway_station_name}
                </span>
              </div>
              <div className="travel-time-wrap">
                <span className="travel-time">
                  {showDuration(data.departure.duration)}
                </span>
                <span className="travel-time-vector"></span>
              </div>
              <div className="train-arrival-time">
                <span className="train-departure-time">
                  {showTime(data.departure.to.datetime)}
                </span>
                <span className="train-departure-point">
                  {data.departure.to.city.name}
                </span>
                <span className="train-departure-station">
                  {data.departure.to.railway_station_name}
                </span>
              </div>
            </div>

            {/* <div className="train-shipment-reverse-scheme">
                  <div className="train-departure-time-wrap">
                    <span className="train-departure-time">0:10</span>
                    <span className="train-departure-point">Москва</span>
                    <span className="train-departure-station">Курский вокзал</span>
                  </div>
                  <div className="travel-time-wrap">
                    <span className="travel-time">9:42</span>
                    <span className="travel-time-vector-reverse"></span>
                  </div>
                  <div className="train-arrival-time">
                    <span className="train-departure-time">9:52</span>
                    <span className="train-departure-point">Санкт-Петербург</span>
                    <span className="train-departure-station"
                      >Ладожский вокзал</span
                    >
                  </div>
              </div> */}
          </div>
          <div className="train-place-prices">
            <ul>
              <li>
                <span className="type">Сидячий</span>
                <span className="seats">
                  {showSeats(data.available_seats_info.forth)}
                </span>
                oт
                <span className="place-ticket-price">
                  {showPrice(data.departure.price_info.fourth)}
                  <span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Плацкарт</span>
                <span className="seats">
                  {showSeats(data.available_seats_info.third)}
                </span>
                oт
                <span className="place-ticket-price">
                  {showPrice(data.departure.price_info.third)}
                  <span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Купе</span>
                <span className="seats">
                  {showSeats(data.available_seats_info.second)}
                </span>
                oт
                <span className="place-ticket-price">
                  {showPrice(data.departure.price_info.second)}
                  <span className="rub-vector-small"></span>
                </span>
              </li>
              <li>
                <span className="type">Люкс</span>
                <span className="seats">
                  {showSeats(data.available_seats_info.first)}
                </span>
                oт
                <span className="place-ticket-price">
                  {showPrice(data.departure.price_info.first)}
                  <span className="rub-vector-small"></span>
                </span>
              </li>
            </ul>
            <div className="train-comfort-available-props">
              <span className="comfort-props_vector"></span>
            </div>
            <NavLink to={"/trainselect/"}>
              <button className="select-seats">Изменить</button>
            </NavLink>
          </div>
        </li>
      </div>
      <div className="passenger-data-wrap">
        <h1>Пассажиры</h1>
        <div className="data-wrap-main_container">
          <div className="data-wrap-container">
            <ul>
              {seats.map((item) => (
                <PassItem item={item} key={item.num}/>
              ))}
            </ul>
          </div>
          <div className="data-wrap-container">
            <div className="confim-order-total">
              <span className="confim-order-total-price">Всего</span>
              <span className="confim-order-total-price-sum">
                {priceCount("adult") + priceCount("kids")}
              </span>
              <span className="rub-vector"></span>
            </div>
            <div className="confim-order-total">
            <NavLink to={"/passengers"}>
              <button className="config-ticket">Изменить</button>
            </NavLink></div>
          </div>
        </div>
      </div>

      <div className="pay-type-wrap">
        <h1>Способ оплаты</h1>
        <div className="pay-type-settings">
          <span>Наличными</span>
          <NavLink to={"/personaldata"}>
            <button className="config-pay-type">Изменить</button>
          </NavLink>
        </div>
      </div>

      {/* <NavLink to="/successfulorder" style={{textDecoration: 'none'}}> */}
      <button className="confirm-button" onClick={(evt) => onSubmitOrder(evt)}>
        Подтвердить
      </button>
    {/* </NavLink> */}
    </section>
  );
}