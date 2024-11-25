import { useGetLastRoutesQuery } from "../../api/api";
import LastTrainList from "./LastTrainList";
import Loading from "../Modal/Loading/Loading";
import Error from "../Modal/Error/Error";
import "./SideBar.css";

export default function SideBar() {
  const { currentData: result, isError, isFetching } = useGetLastRoutesQuery();

  if (isFetching && !result) return <Loading />;

  if (isError) {
    return (
      <section className="sidebar-tickets">
        <h2 className="sidebar-tickets_title">Последние билеты</h2>
        <div>Билеты не найдены</div>
      </section>
    ); 
  }

  if (result) {
    return (
      <section className="sidebar-tickets">
        <h2 className="sidebar-tickets_title">Последние билеты</h2>
        <LastTrainList list={result} />
      </section>
    );
  }

  return null; 
}