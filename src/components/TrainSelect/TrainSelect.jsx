import TrainVar from "./TrainVar";
import TrainList from "./TrainList";
import Pagination from "./Pafination";
import Error from "../Modal/Error/Error";
import Loading from "../Loading/Loading";
import { setTrainsResult } from "../../reducers/trainsParamsSlise";
import { useDispatch, useSelector } from "react-redux";
import { makeArgs } from "../../service/dataTransform";
import { useGetRoutesQuery } from "../../api/api";
import "./TrainSelect.css";

export default function TrainSelect() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.routesParamsSlice);
  const trainsList = useSelector((state) => state.trainsParamsSlice.trainsList);

  const args = makeArgs(list);

  const { currentData: result, isError, isFetching } = useGetRoutesQuery(args);

  if (isError) {
    return <Error />;
  }
  if (isFetching) {
    return <Loading />;
  }
  if (result) {
    dispatch(setTrainsResult(result));

    return (
      <section className="trains">
        <TrainVar count={trainsList.total_count} />
        <TrainList />
        <Pagination />
      </section>
    );
  }
}
