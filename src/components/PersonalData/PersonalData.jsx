import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import NameContainer from "../../components/PayData/NameContainer";
import PayMethod from "../PayData/PayMethod";

import "./personalData.css";

export default function PersonalData() {
  const personalData = useSelector(
    (state) => state.seatsParamsSlice.personalData
  );

    const checkData = () => {
    if (
      personalData.firstName.length > 1 &&
      personalData.surname.length > 1 &&
      personalData.middleName.length > 1 &&
      personalData.phone.length > 1 &&
      personalData.email.length > 1 &&
      personalData.payMethod.payMethod.length > 1
    ) {
      return "";
    } else {
      return "disabled";
    }
  };
  const checkDis = checkData()

  return (
    <section className="pay-data_main-container">
      <section className="pay-data">
        <div className="pay-data-personal_header">
          <h2 className="pay-data-title">Персональные данные</h2>
        </div>
        <NameContainer />
        <div className="pay-data-payType_header">
          <h2 className="pay-data-title">Способ оплаты</h2>
        </div>
        <PayMethod />
      </section>
          <NavLink to="/confirmation" style={{textDecoration: 'none'}}>
          <button className="pay-button" disabled={checkDis}>
        Купить билеты
      </button></NavLink>
    </section>
  );
}