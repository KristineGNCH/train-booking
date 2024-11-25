import TrainsHead from "./TrainsHead";
import { makeArgs } from "../../service/dataTransform";
import TrainsList from "./TrainsList";
import Pagination from "./Pagination";
import Error from "../Modal/Error/Error";
import Loading from "../Modal/Loading/Loading";
import { setTrainsResult } from "../../reducers/trainsParamsSlise";
import { useDispatch, useSelector } from "react-redux";
import { useGetRoutesQuery } from "../../api/api";
import { useEffect } from "react";
import "./TrainSelect.css";

export default function TrainSelect() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.routesParamsSlice);
  const trainsList = useSelector((state) => state.trainsParamsSlice.trainsList);

  const args = makeArgs(list);
  const { currentData: result, isError, isFetching } = useGetRoutesQuery(args);

  useEffect(() => {
    if (result) {
      dispatch(setTrainsResult(result));
    }
  }, [result, dispatch]);

  if (isError) {
    return <Error />;
  }
  if (isFetching) {
    return <Loading />;
  }
  if (trainsList.length > 0) {
    return (
      <section className="trains">
        <TrainsHead count={trainsList.total_count} />
        <TrainsList />
        <Pagination />
      </section>
    );
  }

  return null; 
}
