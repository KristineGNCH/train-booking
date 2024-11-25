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
  const params = useSelector((state) => state.routesParamsSlice);
  const trainsList = useSelector(
    (state) => state.trainsParamsSlice?.trainsList || []
  );

  const args = makeArgs(params);
  const { currentData: result, isError, isFetching } = useGetRoutesQuery(args);

  useEffect(() => {
    if (result) {
      dispatch(setTrainsResult(result));
    }
  }, [result, dispatch]);

  let content;

  if (isError) {
    content = (
      <Error
        message="Не удалось загрузить данные о поездах."
        onRetry={() => refetch()}
      />
    );
  } else if (isFetching) {
    content = <Loading />;
  } else if (trainsList.length > 0) {
    content = (
      <>
        <TrainsHead count={trainsList.total_count || 0} />
        <TrainsList />
        <Pagination />
      </>
    );
  } else {
    content = <div>По вашему запросу ничего не найдено.</div>;
  }

  return <section className="trains">{content}</section>;
}