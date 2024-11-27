import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fromCityId: "",
  toCityId: "",
  startDate: "",
  endDate: "",
  arrivalStartDate: "",
  arrivalEndDate: "",
  classTypes: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
  amenities: {
    wifi: false,
    airConditioning: false,
    express: false,
  },
  priceRange: {
    from: 0,
    to: 15000,
  },
  travelTimes: {
    departure: {
      startHourFrom: "",
      startHourTo: "",
    },
    arrival: {
      startHourFrom: "",
      startHourTo: "",
    },
  },
  limit: 5,
  offset: 0,
  sort: "date",
};

const routesParamsSlice = createSlice({
  name: "routesParams",
  initialState,
  reducers: {
    resetRoutes: () => initialState,
    setParams: (state, action) => {
      const { fromCityId, toCityId, startDate, endDate } = action.payload;
      state.fromCityId = fromCityId;
      state.toCityId = toCityId;
      state.startDate = startDate;
      state.endDate = endDate;
    },
    setOneParam: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    setClassType: (state, action) => {
      const { classType, value } = action.payload;
      state.classTypes[classType] = value;
    },
    setAmenity: (state, action) => {
      const { amenity, value } = action.payload;
      state.amenities[amenity] = value;
    },
  },
});

export const { resetRoutes, setParams, setOneParam, setClassType, setAmenity } = routesParamsSlice.actions;
export default routesParamsSlice.reducer;