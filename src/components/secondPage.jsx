import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import TrainBlock from "./TrainSelect/TrainBlock";
import SeatsPage from "./SeatSelect/SeatPage";

export default function SecondPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.routes.status);
  console.log(status);

  return (
    <main className="tickets-page ">
      <Routes>
        <Route path="/train" element={<TrainBlock />} />
        <Route path="/seats" element={<SeatsPage />} />
      </Routes>
    </main>
  );
}
