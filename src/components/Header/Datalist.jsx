import { useState, useEffect } from "react";
import { useGetCitiesQuery } from "../../api/api"

// import { getCities } from "../../api/cities.js";

import Error from "../Modal/Error/Error.jsx";
import Loading from "../Modal/Loading/Loading.jsx";

export default function Datalist({ arg, onClick }) {
  const { currentData: result, isError, isFetching } = useGetCitiesQuery(arg)
  // const { currentData: result, isError, isFetching } = getCities(arg);
  if (isFetching && !result) return <Loading />;
  if (isError) return <Error />;
  if (result.length > 0) {
    return (
      <>
        {result.map((item) => {
          return (
            <option key={item._id} onClick={onClick(item._id)}>
              {item.name}
            </option>
          );
        })}
      </>
    );
  }
}
