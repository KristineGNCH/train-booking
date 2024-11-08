import { createSlice } from "@reduxjs/toolkit";
import {  filterCoach } from "../service/dataTransform.js";

const initialState = {
  result: [],
  coachType: "",
  filterCoachList: [],
};

const coachParamsSlice = createSlice({
  name: "coachParams",
  initialState,
    reducers: {
    setResult: (prevState, action) => ({
          ...prevState,
          result: action.payload
    }),
    resetCoach: (state) => initialState,
    setFilterCoachList: (prevState, action) => ({
        ...prevState,
          filterCoachList:  action.payload
    }),
        setCoachType: (prevState, action) => 
            ({
                ...prevState,
                coachType: action.payload,
            filterCoachList:  filterCoach(prevState.result, action.payload) 
            })
        ,
      setCoachChecked: (prevState, action) => ({
      ...prevState,
      filterCoachList: prevState.filterCoachList.map((item) => {
      if (item.coach._id === action.payload) {
        return {...item, checked: !item.checked}
      } else {
        return item
      }
    })
      }),
  },
});

export const { setResult, resetCoach, setFilterCoachList, setCoachType, setCoachChecked } =
coachParamsSlice.actions;
export default coachParamsSlice.reducer;