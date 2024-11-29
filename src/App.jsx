import { Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./components/Layout";

import TrainSelectFilter from "./components/SideBar/Filters/TrainSelectFilter.jsx";
import SideBar from "./components/SideBar/SideBar";

import TrainMainBlock from "./components/TrainSelect/TrainBlock.jsx";
import SecondPage from "./components/secondPage.jsx";
import Passengers from "./components/Passenger/Passengers";
import PersonalData from "./components/PersonalData/PersonalData";
import Confirmation from "./components/Confirmation/Confirmation";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
// import NotFound from "./components/NotFound.jsx";

const commonSidebar = <TrainSelectFilter />;
const commonSidebarBottom = <SideBar />;

const createLayout = (main, sidebar) => (
  <Layout
    main={main}
    sidebar={sidebar || commonSidebar}
    sidebarBottom={commonSidebarBottom}
  />
);

const routes = [
  { path: "/", element: <MainPage /> },
  { path: "/trainselect", element: createLayout(<TrainMainBlock />) },
  { path: "/seatsselect", element: createLayout(<SecondPage />) },
  { path: "/passengers", element: createLayout(<Passengers />) },
  { path: "/personaldata", element: createLayout(<PersonalData />) },
  { path: "/confirmation", element: createLayout(<Confirmation />) },
  { path: "/successfulorder", element: <OrderSuccess /> },
  // { path: "*", element: <NotFound /> }, // Обработка 404
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