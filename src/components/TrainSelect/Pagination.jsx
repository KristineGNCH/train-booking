import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setOneParam } from "../../reducers/routesParamsSlice";


export default function Pagination() {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch();
  const limit = useSelector(state => state.routesParamsSlice.limit)

  
  const handleClick = (qty) => {
    dispatch(setOneParam({ key: 'offset', value: qty * limit }));
    setPage(qty)
  }

  const stylePage = (number) => {
       return number === page ? "active-page" : "page"
  }
  
  return (
    <section className="pagination-container">
      <button className="angle-back"></button>
      <ul className="pagination-list">
        <li className={stylePage(1)} onClick={() => handleClick(1)}>1</li>
        <li className={stylePage(2)} onClick={() => handleClick(2)}>2</li>
        <li className={stylePage(3)} onClick={() => handleClick(3)}>3</li>
      </ul>
      <button className="angle-forward"></button>
    </section>
  );
}