import { useGetLastRoutesQuery } from "../../api/api";
import LastTrainsList from "./LastTrainsList";
import Loading from "../Loading/Loading";
import Error from "../Modal/Error/Error";

export default function OverLooked() {
    const {currentData: result, isError, isFetching} = useGetLastRoutesQuery()
  if (isFetching && !result) return <Loading />
  if (isError) return <Error />
  if (result) {
    return (
       <section className="overlooked-tickets">
      <h2>Последние билеты</h2>
        <LastTrainsList list={result} />
         </section>)
  }
}