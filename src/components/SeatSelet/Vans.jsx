import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";

import VansNumbers from "./VansNumbers";
import SeatsSheme from "./Shemes/Sheme";
import VanItem from "./VanItem";

export default function Vans() {
  const filterVansList = useSelector(
    (state) => state.vansParamsSlice.filterVansList
  );

  if (filterVansList.length < 1 || !filterVansList) {
    return (
      <div className="wagon-numbers">
        <p className="number-disclamer">Нет вагонов данного типа</p>
      </div>
    );
  }
  // console.log("filterVansList из стейта");
  // console.log(filterVansList);

  return (
    <>
      <VansNumbers />
      {filterVansList.map((item, index) => {
        if (item.coach._id) {
          return <>
            <VanItem item={item} key={item.coach._id} />
          <div className="seats-disclamer">
            <p>11 человек выбирают места в этом поезде</p>
          </div>
            <SeatsSheme item={item} key={item.coach._id + index} />
        </>
        } else {
          return null
        }
      })}
    </>
  );
}