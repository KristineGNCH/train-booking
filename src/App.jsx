import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./components/Layout";
import TrainSelect from "./components/TrainSelect/TrainSelect";
import TrainSelectFilter from "./components/SideBar/TrainSelectFilter";
import OverLooked from "./components/OverLooked/OverLooked";
// import Passengers from "./components/Passenger/Passengers";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="trainselect"
          element={
            <Layout
              main={<TrainSelect />}
              sidebar={<TrainSelectFilter />}
              sidebarBottom={<OverLooked />}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}
