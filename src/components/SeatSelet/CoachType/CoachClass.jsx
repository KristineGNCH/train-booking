import { setCoachType } from "../../../reducers/coachParamsSlice";
import sitting from "../../../assets/svg/sitting-wagon.svg";
import reserved from "../../../assets/svg/reserved-wagon.svg";
import compartment from "../../../assets/svg/compartment.svg";
import luxe from "../../../assets/svg/luxe.svg;";

import { useDispatch, useSelector } from "react-redux";

export default function coachClass() {
  const dispatch = useDispatch();

  const coachType = useSelector((state) => state.coachParamsSlice.coachType);

  const changeCoachType = (type) => {
    dispatch(setCoachType(type));
  };

  const styleCoachType = (type, range) => {
    return type === coachType
      ? `coach-type ${range}-active`
      : `coach-type ${range}`;
  };

  const styleCoachTypeVector = (type) => {
    return type === coachType
      ? "coach-type_vector-active"
      : "coach-type_vector";
  };

  return (
    <>
      <h2 className="coach-type-title">Тип вагона</h2>
      <ul className="coach-types-list">
        <li
          className={styleCoachType("sitting", "seat")}
          onClick={() => changeCoachType("sitting")}
        >
          <span className={styleCoachTypeVector("sitting")}>
            <img src={sitting} alt={"image"} />
          </span>
          Сидячий
        </li>
        <li
          className={styleCoachType("reserved", "reserved")}
          onClick={() => changeCoachType("reserved")}
        >
          <span className={styleCoachTypeVector("reserved")}>
            <img src={reserved} alt={"image"} />
          </span>
          Плацкарт
        </li>
        <li
          className={styleCoachType("compartment", "compartment")}
          onClick={() => changeCoachType("compartment")}
        >
          <span className={styleCoachTypeVector("compartment")}>
            <img src={compartment} alt={"image"} />
          </span>
          Купе
        </li>
        <li
          className={styleCoachType("luxe", "luxe")}
          onClick={() => changeCoachType("luxe")}
        >
          <span className={styleCoachTypeVector("luxe")}>
            <img src={luxe} alt={"image"} />
          </span>
          Люкс
        </li>
      </ul>
    </>
  );
}
