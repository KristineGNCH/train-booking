import { useDispatch } from "react-redux";
import { setOneParam } from "../../reducers/routesParamsSlice";

export default function TrainsHead({ count }) {
  const dispatch = useDispatch();

  const onHandleSort = (evt) => {
    if (0 <= evt.target.selectedIndex <= 3) {
      if (evt.target.value === "time") {
        dispatch(setOneParam({ key: "sort", value: "time" }));
      }
      // не могу использовать "по цене", т.к. API отдает ошибку
      if (evt.target.value === "price") {
        dispatch(setOneParam({ key: "sort", value: "duration" }));
      }
      if (evt.target.value === "duration") {
        dispatch(setOneParam({ key: "sort", value: "duration" }));
      }
    }
  };

  const onHandleOffset = (evt) => {
    if (
      +evt.target.textContent === 5 ||
      +evt.target.textContent === 10 ||
      +evt.target.textContent === 20
    ) {
      dispatch(setOneParam({ key: "limit", value: +evt.target.textContent }));
    } else {
      return;
    }
  };
  return (
    <section className="trains_head">
      <div className="trains-list_section-title">
        <p className="section-name">Найдено: </p>
        <span className="trains-amount">{count}</span>
      </div>
      <div className="trains-list_sort-by">
        <p className="sort-by">Сортировать по:</p>
        <select
          className="sorting"
          name=""
          onChange={(evt) => onHandleSort(evt)}
        >
          <option value="time">времени</option>
          <option value="price">стоимости</option>
          <option value="duration">длительности</option>
        </select>
      </div>
      <div className="trains-list_show-by">
        <p className="show-by">Показывать по:</p>
        <ul className="show-by-list">
          <li onClick={(evt) => onHandleOffset(evt)}>5</li>
          <li onClick={(evt) => onHandleOffset(evt)}>10</li>
          <li onClick={(evt) => onHandleOffset(evt)}>20</li>
        </ul>
      </div>
    </section>
  );
}
