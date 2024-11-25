import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./components/Layout";
import TrainSelect from "./components/TrainSelect/TrainSelect";
import TrainSelectFilter from "./components/SideBar/Filters/TrainSelectFilter";
import SideBar from "./components/SideBar/SideBar";
import SeatsSelect from "./components/SeatSelet/SeatsSelect";
import Passengers from "./components/Passenger/Passengers";
import PersonalData from "./components/PersonalData/PersonalData";
import Confirmation from "./components/Confirmation/Confirmation";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

// Общие компоненты для боковой панели
const commonSidebar = <TrainSelectFilter />;
const commonSidebarBottom = <SideBar />;

// Массив маршрутов
const routes = [
  { path: "/", element: <MainPage /> },
  {
    path: "search",
    element: (
      <Layout
        main={<TrainSelect />}
        sidebar={commonSidebar}
        sidebarBottom={commonSidebarBottom}
      />
    ),
  },
  {
    path: "results",
    element: (
      <Layout
        main={<SeatsSelect />}
        sidebar={commonSidebar}
        sidebarBottom={commonSidebarBottom}
      />
    ),
  },
  {
    path: "passengers",
    element: <Layout main={<Passengers />} sidebar={commonSidebarBottom} />,
  },
  {
    path: "personaldata",
    element: <Layout main={<PersonalData />} sidebar={commonSidebarBottom} />,
  },
  {
    path: "confirmation",
    element: <Layout main={<Confirmation />} sidebar={commonSidebarBottom} />,
  },
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
