import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./components/Layout";
import TrainSelect from "./components/TrainSelect/TrainSelect";
import TrainSelectFilter from "./components/SideBar/Filters/TrainSelectFilter";
import SideBar from "./components/SideBar/SideBar";
import SeatsSelect from "./components/SeatSelet/SeatsSelect";
import Passengers from "./components/Passenger/Passengers";
import PersonalData from "./components/PersonalData/PersonalData"; // Убедитесь, что этот импорт существует
import Confirmation from "./components/Confirmation/Confirmation"; // Убедитесь в существовании этого импорта
import OrderSuccess from "./components/OrderSuccess/OrderSuccess"; // Исправьте имя компонента, если требуется

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="search"
          element={
            <Layout
              main={<TrainSelect />}
              sidebar={<TrainSelectFilter />}
              sidebarBottom={<SideBar />}
            />
          }
        />

        <Route
          path="results"
          element={
            <Layout
              main={<SeatsSelect />}
              sidebar={<TrainSelectFilter />}
              sidebarBottom={<SideBar />}
            />
          }
        />

        <Route
          path="passengers"
          element={<Layout main={<Passengers />} sidebar={<SideBar />} />}
        />

        <Route
          path="personaldata"
          element={<Layout main={<PersonalData />} sidebar={<SideBar />} />}
        />

        <Route
          path="confirmation"
          element={<Layout main={<Confirmation />} sidebar={<SideBar />} />}
        />

        <Route path="successfulorder" element={<OrderSuccess />} />
      </Routes>
    </div>
  );
}

export default App;