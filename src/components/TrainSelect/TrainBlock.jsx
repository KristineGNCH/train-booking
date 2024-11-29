/* eslint-disable react/self-closing-comp */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Train from "./Train";
import { stageChange } from "../../reducers/Slices/stageSlice";
import Pagination from "./Pagination";
import Sorting from "./Sorting";

export default function TrainMainBlock() {
  const dispatch = useDispatch();

  const trains = useSelector((state) => {
    console.log(state);
    return state.routes?.routes || [];
  });
  useEffect(() => {
    dispatch(stageChange({ stage: 1 }));
  }, [dispatch]);

  return (
    <div className="trains__block content__block">
      <div className="trains__block-breadcrumbs">
        <Sorting />
      </div>
      <ul className="train__block-list">
        {Array.isArray(trains) && trains.length > 0 ? (
          trains.map((train) => <Train key={train.id} train={train} />)
        ) : (
          <li>Нет доступных поездов</li>
        )}
      </ul>
      <Pagination />
    </div>
  );
}
