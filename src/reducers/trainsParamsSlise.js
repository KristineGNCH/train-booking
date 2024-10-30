import { createSlice } from "@reduxjs/toolkit";
import { sortByTime, sortByPrice, sortByDuration } from "../service/dataTransform.js";
import { makeArgs } from "../service/dataTransform.js";

const initialState = {
    trainsList: [],
    printTrainsList: [],
    request: ''
};


const trainsParamsSlice = createSlice({
    name: "trainsParams",
    initialState,
      reducers: {
      setTrainsResult: (prevState, action) => ({
            ...prevState,
              trainsList: action.payload,
              printTrainsList: sortByTime(action.payload.items)
          }),
      setRequest: (prevState, action) => ({
            ...prevState,
              request: makeArgs() 
          }),
      setSortByPriceTrains: (prevState) => ({
            ...prevState,
              printTrainsList: sortByPrice(prevState.trainsList.items)
          }),
      setSortByDurationTrains: (prevState) => ({
            ...prevState,
              printTrainsList: sortByDuration(prevState.trainsList.items)
          })
      }
  });
  
  export const { setTrainsResult,
      setSortByTimeTrains, setSortByPriceTrains, setSortByDurationTrains 
  } = trainsParamsSlice.actions;
  export default trainsParamsSlice.reducer;