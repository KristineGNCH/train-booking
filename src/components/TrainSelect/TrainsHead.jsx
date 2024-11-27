import { useDispatch } from "react-redux";
import { setOneParam } from "../../reducers/routesParamsSlice";

export default function TrainsHead({ count }) {
  const dispatch = useDispatch();

  const onHandleSort = (evt) => {
    if (evt.target.selectedIndex >= 0 && evt.target.selectedIndex <= 3) {
      const sortKey =
        evt.target.value === "price" ? "duration" : evt.target.value;
      dispatch(setOneParam({ key: "sort", value: sortKey }));
    }
  };

  const validLimits = new Set([5, 10, 20]);
  const onHandleOffset = (evt) => {
    const selectedLimit = +evt.target.textContent;
    if (validLimits.has(selectedLimit)) {
      dispatch(setOneParam({ key: "limit", value: selectedLimit }));
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
        <select className="sorting" onChange={onHandleSort}>
          <option value="time">времени</option>
          <option value="price">стоимости</option>
          <option value="duration">длительности</option>
        </select>
      </div>
      <div className="trains-list_show-by">
        <p className="show-by">Показывать по:</p>
        <ul className="show-by-list">
          <li key={5} onClick={onHandleOffset}>
            5
          </li>
          <li key={10} onClick={onHandleOffset}>
            10
          </li>
          <li key={20} onClick={onHandleOffset}>
            20
          </li>
        </ul>
      </div>
    </section>
  );
}