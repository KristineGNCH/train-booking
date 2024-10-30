import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from_city_id: "",
  to_city_id: "",
  date_start: "",
  date_end: "",
  date_start_arrival: "",
  date_end_arrival: "",
  have_first_class: false,
  have_second_class: false,
  have_third_class: false,
  have_fourth_class: false,
  have_wifi: false,
  have_air_conditioning: false,
  have_express: false,
  price_from: 0,
  price_to: 15000,
  start_departure_hour_from: "",
  start_departure_hour_to: "",
  start_arrival_hour_from: "",
  start_arrival_hour_to: "",
  end_departure_hour_from: "",
  end_departure_hour_to: "",
  end_arrival_hour_from: "",
  end_arrival_hour_to: "",
  limit: 5,
  offset: 0,
  sort: "date",
};

const routesParamsSlice = createSlice({
  name: "routesParams",
  initialState,
  reducers: {
    resetRoutes: (state) => initialState,
    setParams: (state, action) => ({
        ...state,
      from_city_id: action.payload.from_city_id,
      to_city_id: action.payload.to_city_id,
      date_start: action.payload.date_start,
      date_end: action.payload.date_end,
      }),
      setOneParam: (state, action) => ({
        ...state, 
        [action.payload.key]: action.payload.value,
    })
  },
});

export const { resetRoutes, setParams, setOneParam } = routesParamsSlice.actions;
export default routesParamsSlice.reducer;