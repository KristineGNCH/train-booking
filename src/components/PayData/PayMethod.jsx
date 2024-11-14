import {
  setPayWay,
  resetPayWay,
  setOnlinePay,
} from "../../reducers/seatsParamsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PayMethod() {
  const dispatch = useDispatch();
  const personalData = useSelector(
    (state) => state.seatsParamsSlice.personalData
  );

  const setPayMethod = (evt) => {
    if (evt.target.checked) {
      dispatch(setPayWay(evt.target.value));
    } else {
      dispatch(resetPayWay());
    }
  };

  const handleChecked = (type) => {
    switch (type) {
      case "cash":
        return personalData.payMethod.payMethod === "cash"
          ? "checked"
          : "!checked";
      case "online":
        return personalData.payMethod.payMethod === "online"
          ? "checked"
          : "!checked";
      default:
        return false;
    }
  };

  const handleCashDisabled = () => {
    if (personalData.payMethod.payMethod === "online") {
      return "disabled";
    } else {
      return "";
    }
  };

  const handleOnlineDisabled = () => {
    if (personalData.payMethod.payMethod === "cash") {
      return "disabled";
    } else {
      return "";
    }
  };

  const setOnline = (elem) => {
    dispatch(setOnlinePay(elem));
  };

  return (
    <div className="pay-data-payType_form">
      <div className="payType-checkbox-container">
        <input
          className="payType-checkbox"
          id="box-1"
          type="checkbox"
          value={"online"}
          onClick={(evt) => setPayMethod(evt)}
          disabled={handleOnlineDisabled()}
        />
        <label htmlFor="box-1">Онлайн</label>
      </div>
      <ul className="payType_list">
        <li className="payType_item" onClick={() => setOnline("card")}>
          Банковской картой
        </li>
        <li className="payType_item" onClick={() => setOnline("PayPal")}>
          PayPal
        </li>
        <li className="payType_item" onClick={() => setOnline("QIWI")}>
          Visa QIWI Wallet
        </li>
      </ul>
      <div className="payType-checkbox-container cash">
        <input
          className="payType-checkbox"
          id="box-2"
          type="checkbox"
          value={"cash"}
          onClick={(evt) => setPayMethod(evt)}
          defaultChecked={handleChecked("cash")}
          disabled={handleCashDisabled()}
        />
        <label htmlFor="box-2">Наличными</label>
      </div>
    </div>
  );
}
