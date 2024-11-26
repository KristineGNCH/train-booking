import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./components/Layout";
import TrainSelect from "./components/TrainSelect/TrainSelect";
import TrainSelectFilter from "./components/SideBar/Filters/TrainSelectFilter";
import LastTrainList from "./components/SideBar/LastTrainList";
import SideBar from "./components/SideBar/SideBar";
import SeatsSelect from "./components/SeatSelet/SeatsSelect";
import Passengers from "./components/Passenger/Passengers";
import PersonalData from "./components/PersonalData/PersonalData";
import Confirmation from "./components/Confirmation/Confirmation";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import TicketInfo from "./components/TicketInfo/TicketInfo";

const commonSidebar = <TrainSelectFilter />;
const commonSidebarBottom = <SideBar />;

const renderLayout = (main, sidebar) => (
  <Layout main={main} sidebar={sidebar} sidebarBottom={commonSidebarBottom} />
);

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "trainselect", element: renderLayout(<TrainSelect />, commonSidebar) },
  { path: "seatsselect", element: renderLayout(<SeatsSelect />, commonSidebar) },
  { path: "passengers", element: renderLayout(<Passengers />, <TicketInfo />) },
  { path: "personaldata", element: renderLayout(<PersonalData />, <TicketInfo />) },
  { path: "confirmation", element: renderLayout(<Confirmation />, <TicketInfo />) },
  { path: "successfulorder", element: <OrderSuccess /> },
];

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
