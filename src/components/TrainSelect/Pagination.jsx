import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOneParam } from "../../reducers/routesParamsSlice";

export default function Pagination() {
  const dispatch = useDispatch();

  const limit = useSelector((state) => state.routesParamsSlice.limit);
  const totalItems = useSelector((state) => state.routesParamsSlice.totalItems);

  const totalPages = Math.ceil(totalItems / limit);

  const [page, setPage] = useState(1);

  const handleClick = (qty) => {
    dispatch(setOneParam({ key: "offset", value: (qty - 1) * limit }));
    setPage(qty);
  };

  const stylePage = (number) => {
    return number === page ? "active-page" : "page";
  };

  return (
    <section className="pagination-container">
      <button
        className="angle-back"
        disabled={page === 1}
        onClick={() => handleClick(page - 1)}
      >
        &lt;
      </button>

      <ul className="pagination-list">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            className={stylePage(index + 1)}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>

      <button
        className="angle-forward"
        disabled={page === totalPages}
        onClick={() => handleClick(page + 1)}
      >
        &gt;
      </button>
    </section>
  );
}
