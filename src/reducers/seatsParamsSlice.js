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
        state.req.id = action.payload.req.id
        state.data.item  = action.payload.data
    },
    setSelectSeats: (prevState, action) => ({
      ...prevState,
      seats: [
        ...prevState.seats,
        {
          num: action.payload.num,
          category: prevState.category,
          price: action.payload.price,
        },
      ],
    }),
    resetSelectSeats: (prevState, action) => ({
      ...prevState,
      seats: prevState.seats.filter((item) => item.num !== action.payload),
    }),
    setPassInfo: (prevState, action) => ({
      ...prevState,
      seats: prevState.seats.map((elem) => {
        if (elem.num === action.payload.itemNum) {
          return {
            ...elem,
            [action.payload.key]: action.payload.value,
          };
        } else {
          return elem;
        }
      }),
    }),
    deletePassInfo: (prevState, action) => ({
      ...prevState,
      seats: prevState.seats.filter((elem) => elem.num !== action.payload),
    }),
    setCategory: (prevState, action) => ({
      ...prevState,
      category: action.payload,
    }),
    setPersonalData: (prevState, action) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        [action.payload.key]: action.payload.value,
      },
    }),
    setPayWay: (prevState, action) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        payMethod: {
          ...prevState.personalData.personalData,
          payMethod: action.payload,

        },
      },
    }),
    resetPayWay: (prevState) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        payMethod: {
          ...prevState.personalData.personalData,
          payMethod: "",
          online: "",
        },
      },
    }),
    setOnlinePay: (prevState, action) => ({
      ...prevState,
      personalData: {
        ...prevState.personalData,
        payMethod: {
          ...prevState.personalData.payMethod,
          online: action.payload,
        },
      },
    }),
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