import { useDispatch, useSelector } from "react-redux";
import { setPassInfo, deletePassInfo } from "../../reducers/seatsParamsSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

export default function Passenger({ item, index }) {
  const dispatch = useDispatch();
  const seatsCheck = useSelector((state) => state.seatsParamsSlice.seats);

  const deletePassenger = (item) => {
    dispatch(deletePassInfo(item.num));
  };

  const getDataForVal = (item) => {
    const arr = seatsCheck.filter((elem) => elem.num === item.num);
    if (arr.length > 0) {
      return arr[0];
    }
  };

  const showDataForVal = (elem) => {
    let dataPass = getDataForVal(item);
    return dataPass[elem] ? dataPass[elem] : null;
  };

  const timeDelay = (forStore) => {
    setTimeout(() => dispatch(setPassInfo(forStore)), 10);
  };

  const onHandleToggle = (evt) => {
    if (evt.target.value === "Adult") {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "category", value: "adult" })
      );
    }
    if (evt.target.value === "Child") {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "Adult_Child", value: "child" })
      );
    }
  };

  const onHandlePass = (option) => {
    if (option.value === "none") {
      return;
    } else {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "passport", value: option.value })
      );
    }
  };
  const showOpt = (passOptions) => {
    return passOptions.filter(
      (elem) => elem.value === showDataForVal("passport")
    )[0].label;
  };

  const setStartDate = (date) => {
    let ddMmYear =
      date.getUTCDate() +
      "-" +
      date.getUTCMonth() +
      1 +
      "-" +
      date.getUTCFullYear();
    if (ddMmYear.length > 6) {
      dispatch(
        setPassInfo({ itemNum: item.num, key: "date", value: ddMmYear })
      );
    }
  };

  const lowMobCheck = (evt) => {
    dispatch(
      setPassInfo({
        itemNum: item.num,
        key: "lowMob",
        value: evt.target.checked,
      })
    );
    getDataForVal(item);
  };

  const passOptions = [
    { value: "none", label: "---" },
    { value: "passRF", label: "Паспорт РФ" },
    { value: "passForeign", label: " Загранпаспорт" },
  ];

  const colourStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      width: "280px",
      height: "50px",
      background: "#ffffff",
      fontSize: "24px",
      color: "#292929",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      width: "280px",
      height: "50px",
      background: "#ffffff",
      border: "1px solid #928f94",
      boxSizing: "border-box",
      borderRadius: "5px",
      fontSize: "24px",
      color: "#292929",
      marginRight: "25px",
      paddingLeft: "15px",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#292929",
      fontSize: "24px",
      marginRight: "25px",
      paddingLeft: "15px",
    }),
  };

  const checkPassInfo = () => {
    if (
      showDataForVal("first-name_title") &&
      showDataForVal("last-name_title") &&
      showDataForVal("middle-name_title") &&
      showDataForVal("gender") &&
      showDataForVal("date") &&
      showDataForVal("passport") &&
      showDataForVal("passNum") &&
      showDataForVal("passSeria")
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="passenger-data">
      <div className="passenger-data-header">
        <span className="data-skip-vector"></span>
        <h2 className="passenger-data-title">Пассажир-{index + 1}</h2>
        <span
          className="data-delete-vector"
          onClick={() => deletePassenger(item)}
        ></span>
      </div>
      <div className="passenger-data-form">
        <select
          className="passenger-age-type-selector"
          onChange={(evt) => onHandleToggle(evt)}
        >
          <option className="age-type-option" value="Adult">
            Взрослый
          </option>
          <option className="age-type-option" value="Child">
            Детский
          </option>
        </select>
        <div className="passenger-name-selector-container">
          <div className="last-name-container">
            <h3 className="last-name_title">Фамилия</h3>
            <input
              type="text"
              value={showDataForVal("last-name_title") || ""}
              onChange={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "last-name_title",
                  value: evt.target.value,
                })
              }
            />
          </div>
          <div className="first-name-container">
            <h3 className="first-name_title">Имя</h3>
            <input
              type="text"
              value={showDataForVal("first-name_title") || ""}
              onChange={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "first-name_title",
                  value: evt.target.value,
                })
              }
            />
          </div>
          <div className="middle-name-container">
            <h3 className="middle-name_title">Отчество</h3>
            <input
              type="text"
              value={showDataForVal("middle-name_title") || ""}
              onChange={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "middle-name_title",
                  value: evt.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="passenger-birthdayAndGender-selector-container">
          <div className="gender-field">
            <h3 className="gender-title">Пол</h3>
            <div className="gender-wrap">
              <input
                type="radio"
                id="gender_male"
                name="gender_male"
                value="male"
                onClick={() =>
                  dispatch(
                    setPassInfo({
                      itemNum: item.num,
                      key: "gender",
                      value: "male",
                    })
                  )
                }
              />
              <label htmlFor="gender_male">М</label>
              <input
                type="radio"
                id="gender_female"
                name="female"
                value="female"
                onClick={() =>
                  dispatch(
                    setPassInfo({
                      itemNum: item.num,
                      key: "gender",
                      value: "female",
                    })
                  )
                }
              />
              <label htmlFor="gender_femalet">Ж</label>
            </div>
          </div>
          <div className="birthday-field">
            <h3 className="birthday-title">Дата рождения</h3>

            <DatePicker
              className="search-form_input birthday-date"
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
              maxDate={new Date()}
              value={showDataForVal("date") || ""}
            />
          </div>
        </div>
        <div className="low-mobility-checkbox-container">
          <input
            className="low-mobility-checkbox"
            type="checkbox"
            value=""
            onClick={(evt) => lowMobCheck(evt)}
          />
          <p>Ограниченная подвижность</p>
        </div>
        <div className="passenger-document-selector-container">
          <div className="document-type-container">
            <h3 className="document-type_title">Тип документа</h3>
            <Select
              styles={colourStyles}
              options={passOptions}
              onChange={onHandlePass}
              defaultValue={passOptions.filter(
                (option) => option.value === "PassRF"
              )}
            />
          </div>
          <div className="document-serial-container">
            <h3 className="document-type_title">Серия</h3>
            <input
              type="text"
              pattern="[0-9]{4}"
              value={showDataForVal("passSeria") || ""}
              onChange={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "passSeria",
                  value: evt.target.value,
                })
              }
            />
          </div>
          <div className="document-num-container">
            <h3 className="document-type_title">Номер</h3>
            <input
              type="text"
              value={showDataForVal("passNum") || ""}
              pattern="[0-9]{6}"
              onChange={(evt) =>
                timeDelay({
                  itemNum: item.num,
                  key: "passNum",
                  value: evt.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="next-passenger_button-container">
          <button className="next-passenger_button" disabled={checkPassInfo()}>
            Следующий пассажир
          </button>
        </div>
      </div>
    </section>
  );
}
