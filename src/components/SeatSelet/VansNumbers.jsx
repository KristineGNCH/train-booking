import { useDispatch, useSelector } from "react-redux";

export default function VansNumbers() {
  const dispatch = useDispatch();
  const filterVansList = useSelector(
    (state) => state.vansParamsSlice.filterVansList
  );

  const changeCheckedVan = (id) => {
    dispatch(setVanChecked(id));
  };

  const styleVanNumber = (id) => {
    let status = filterVansList.filter((item) => item.coach._id === id)[0]
      .checked;
    return status ? "active-wagon-number" : "wagon-number";
  };

  return (
    <div className="wagon-numbers">
      <p className="numbers-title">Вагоны</p>
      <ul className="wagon-numbers-list">
        {filterVansList.map((item, index) => {
          return (
            <li
              className={styleVanNumber(item.coach._id)}
              onClick={() => changeCheckedVan(item.coach._id)}
              key={index}
            >
              {`0${item.coach._id.slice(-1)}`}
            </li>
          );
        })}
      </ul>
      <p className="number-disclamer">
        Нумерация вагонов начинается с головы поезда
      </p>
    </div>
  );
}
