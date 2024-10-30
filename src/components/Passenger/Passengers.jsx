import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Passenger";

export default function Passengers() {
  const seatsCheck = useSelector((state) => state.seatsParamsSlice.seats);
  const navigate = useNavigate();

  const getDataForVal = (item) => {
    const arr = seatsCheck.filter((elem) => elem.num === item.num);
    if (arr.length > 0) {
      return arr[0];
    }
  };

  const showDataForVal = (elem, item) => {
    let dataPass = getDataForVal(item);
    return dataPass[elem] ? dataPass[elem] : null;
  };

  const checkPassInfo = (item) => {
    if (
      showDataForVal("first-name_title", item) &&
      showDataForVal("last-name_title", item) &&
      showDataForVal("middle-name_title", item) &&
      showDataForVal("gender", item) &&
      showDataForVal("date", item) &&
      showDataForVal("passport", item) &&
      showDataForVal("passNum", item) &&
      showDataForVal("passSeria", item)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onHandlCheck = (evt) => {
    evt.preventDefault();
    let arr = seatsCheck.map((item) => {
      if (checkPassInfo(item)) {
        return "true";
      } else {
        return "false";
      }
    });
    arr = arr.filter((elem) => elem === "false");
    if (arr === -1 || arr.length < 1) {
      navigate("/personaldata");
    } else {
      alert("Не заполнены даныне на всех пассажиров");
    }
  };

  const drowList = (seatsCheck) => {
    if (seatsCheck.length > 0) {
      return seatsCheck.map((item, index) => {
        return <Passenger item={item} index={index} key={index} />;
      });
    }
  };

  return (
    <section className="passenger-data_main-container">
      {drowList(seatsCheck)}

      {/* <section className="passenger-data">
            <div className="passenger-data-header">
              <span className="data-skip-vector-active"></span>
              <h2 className="passenger-data-title">Пассажир-3</h2>
            </div>
          </section> */}
      {/* <!--Данный блок будет доступен не всегда, при клике на него будет сделана переброска в меню выбора места в вагоне если таковые ещё есть--> */}

      <section className="passenger-data">
        <div className="passenger-data-header">
          <h2 className="passenger-add-title">Добавить пассажира</h2>
          <Link to={"/seatsselect"}>
            <span className="data-add-vector"></span>
          </Link>
        </div>
      </section>

      <button className="next-button" onClick={(evt) => onHandlCheck(evt)}>
        Далее
      </button>
    </section>
  );
}
