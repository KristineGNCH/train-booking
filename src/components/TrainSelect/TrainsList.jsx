import { useSelector } from "react-redux";
import TrainItem from "./TrainItem";

export default function TrainsList() {
  const printTrainsList = useSelector(
    (state) => state.trainsParamsSlice.printTrainsList
  );
  const trainsList = useSelector((state) => state.trainsParamsSlice.trainsList);
  //  console.log(printTrainsList)
  //   sortByPrice(printTrainsList)
  //

  return (
    <section className="trains-list-container">
      <ul className="trains-list">
        {printTrainsList
          ? printTrainsList.map((item, index) => {
              return <TrainItem item={item} key={index} />;
            })
          : null}
      </ul>
    </section>
  );
}
