import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "../../reducers/Slices/filterSlice";
import { fetchRoutes } from "../../reducers/Slices/routeSlice";

export default function Pagination() {
  const dispatch = useDispatch();

  const [pages, setPages] = useState([]);
  const [activePages, setActivePages] = useState([]);
  const { limit = 10, offset = 0 } = useSelector((state) => state.filter || {});
  const count = useSelector((state) => state.routes?.total_count || 0);

  const currentPage = Math.trunc(offset / limit + 1);

  useEffect(() => {
    dispatch(filterChange({ name: "offset", value: 0 }));
    const arr = [];
    for (let i = 1; i <= Math.ceil(count / limit); i += 1) {
      arr.push(i);
    }
    setPages(arr);
  }, [count, limit, dispatch]);

  useEffect(() => {
    let arr1;
    if (currentPage === 1) {
      arr1 = [currentPage, currentPage + 1, currentPage + 2];
    } else if (currentPage === pages.slice(-1)[0]) {
      arr1 = [currentPage - 2, currentPage - 1, currentPage];
    } else if (currentPage === pages.slice(-2, -1)[0]) {
      arr1 = [currentPage - 1, currentPage, currentPage + 1];
    } else {
      arr1 = [currentPage - 1, currentPage, currentPage + 1];
    }

    setActivePages(arr1);
  }, [currentPage, pages]);

  const goToPage = (page) => {
    if (page < 1 || page > pages.length) return;
    const delta = page - currentPage;
    let newOffset = limit * (currentPage - 1) + limit * delta;

    if (newOffset < 0) newOffset = 0;
    if (Math.trunc(newOffset / limit + 1) > pages.length)
      newOffset = (pages.length - 1) * limit;

    dispatch(filterChange({ name: "offset", value: newOffset }));
    dispatch(fetchRoutes());
  };

  if (pages.length < 2) return <div className="pagination" />;

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__button pagination__button-prev"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <ul className="pagination__list">
        {pages.length < 5 ? (
          pages.map((el) => (
            <li
              className={`pagination__item ${
                currentPage === el ? "active" : ""
              }`}
              key={el}
              onClick={() => goToPage(el)}
            >
              {el}
            </li>
          ))
        ) : (
          <>
            {activePages.map((el) => (
              <li
                className={`pagination__item ${
                  currentPage === el ? "active" : ""
                }`}
                key={el}
                onClick={() => goToPage(el)}
              >
                {el}
              </li>
            ))}

            {currentPage < pages.slice(-3, -1)[0] && (
              <li className="pagination__item pagination__item-dot">...</li>
            )}
            {pages.slice(-1).map((el) => (
              <li
                className={`pagination__item ${
                  currentPage === el ? "active" : ""
                }`}
                key={el}
                onClick={() => goToPage(el)}
              >
                {el}
              </li>
            ))}
          </>
        )}
      </ul>
      <button
        type="button"
        className="pagination__button pagination__button-next"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === pages.length}
      >
        Next
      </button>
    </div>
  );
}
