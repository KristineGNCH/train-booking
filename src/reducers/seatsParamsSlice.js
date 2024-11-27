import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  req: {
    id: "",
  },
  data: {},
  seats: [],
  category: "adult",
  personalData: {
    firstName: "",
    surname: "",
    middleName: "",
    phone: "",
    email: "",
    payMethod: {
      payMethod: "",
      online: "card",
    },
  },
};

const seatsParamsSlice = createSlice({
  name: "routesParams",
  initialState,
  reducers: {
    resetSeats: (state) => initialState,

    setSeatsParams: (state, action) => {
      state.req.id = action.payload.req.id;
      state.data.item = action.payload.data;
    },

    setSelectSeats: (state, action) => {
      state.seats.push({
        num: action.payload.num,
        category: state.category,
        price: action.payload.price,
      });
    },

    resetSelectSeats: (state, action) => {
      state.seats = state.seats.filter((item) => item.num !== action.payload);
    },

    setPassInfo: (state, action) => {
      const seat = state.seats.find((elem) => elem.num === action.payload.itemNum);
      if (seat) {
        seat[action.payload.key] = action.payload.value;
      }
    },

    deletePassInfo: (state, action) => {
      state.seats = state.seats.filter((elem) => elem.num !== action.payload);
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setPersonalData: (state, action) => {
      state.personalData[action.payload.key] = action.payload.value;
    },

    setPayWay: (state, action) => {
      state.personalData.payMethod.payMethod = action.payload;
    },

    resetPayWay: (state) => {
      state.personalData.payMethod.payMethod = "";
      state.personalData.payMethod.online = "";
    },

    setOnlinePay: (state, action) => {
      state.personalData.payMethod.online = action.payload;
    },
  },
});

export const {
  resetSeats,
  setSeatsParams,
  setSelectSeats,
  resetSelectSeats,
  setPassInfo,
  deletePassInfo,
  setCategory,
  setPersonalData,
  setPayWay,
  resetPayWay,
  setOnlinePay,
} = seatsParamsSlice.actions;

export default seatsParamsSlice.reducer;