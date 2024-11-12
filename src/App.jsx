import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./components/Layout";
import TrainSelect from "./components/TrainSelect/TrainSelect";
import TrainSelectFilter from "./components/SideBar/Filters/TrainSelectFilter";
import SideBar from "./components/SideBar/SideBar";
import SeatsSelect from './components/SeatSelet/SeatsSelect'


function App() {
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
              sidebarBottom={<SideBar />}
            />
          }
        ></Route>

        <Route
          path="seatsselect"
          element={
            <Layout
              main={<SeatsSelect />}
              sidebar={<TrainSelectFilter />}
              sidebarBottom={<SideBar />}
            />
          }
        ></Route>
{/* 
        <Route
          path="passengers"
          element={<Layout main={<Passengers />} sidebar={<TicketInfo />} />}
        ></Route>

        <Route
          path="personaldata"
          element={<Layout main={<PersonalData />} sidebar={<TicketInfo />} />}
        ></Route>

        <Route
          path="confirmation"
          element={<Layout main={<Confirmation />} sidebar={<TicketInfo />} />}
        ></Route>

        <Route path="successfulorder" element={<Successfulorder />}></Route> */}

      </Routes>
    </div>
  );
}

export default App;