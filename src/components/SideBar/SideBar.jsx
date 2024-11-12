import { useGetLastRoutesQuery } from "../../api/api";
import LastTrainList from "./LastTrainList";
import Loading from "../Modal/Loading/Loading";
import Error from "../Modal/Error/Error";
import "./SideBar.css";

export default function SideBar() {
  const { currentData: result, isError, isFetching } = useGetLastRoutesQuery();
  if (isFetching && !result) return <Loading />;
  if (isError) return <Error />;
  if (result) {
    return (
      <section className="sidebar-tickets">
        <h2>Последние билеты</h2>
        <LastTrainList list={result} />
      </section>
    );
  }
}
