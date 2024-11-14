import { setPersonalData } from "../../reducers/seatsParamsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function NameContainer() {
  const dispatch = useDispatch();
  const personalData = useSelector(
    (state) => state.seatsParamsSlice.personalData
  );

  const setValue = (key, value) => {
    dispatch(setPersonalData({ key: key, value: value }));
  };

  return (
    <div className="pay-data-form">
      <div className="passenger-name-selector-container">
        <div className="last-name-container">
          <h3 className="last-name_title">Фамилия</h3>
          <input
            type="text"
            value={personalData.firstName || ""}
            onChange={(evt) => setValue("firstName", evt.target.value)}
          />
        </div>
        <div className="first-name-container">
          <h3 className="first-name_title">Имя</h3>
          <input
            type="text"
            value={personalData.surname || ""}
            onChange={(evt) => setValue("surname", evt.target.value)}
          />
        </div>
        <div className="middle-name-container">
          <h3 className="middle-name_title">Отчество</h3>
          <input
            type="text"
            value={personalData.middleName || ""}
            onChange={(evt) => setValue("middleName", evt.target.value)}
          />
        </div>
      </div>

      <div className="passenger-phoneAndEmail-selector-container">
        <div className="phone-field">
          <h3 className="phone-title">Контактный телефон</h3>
          <input
            type="tel"
            value={personalData.phone || ""}
            onChange={(evt) => setValue("phone", evt.target.value)}
          />
        </div>
        <div className="email-field">
          <h3 className="email-title">E-mail</h3>
          <input
            type="email"
            value={personalData.email || ""}
            onChange={(evt) => setValue("email", evt.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
