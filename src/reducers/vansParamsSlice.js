import { createSlice } from "@reduxjs/toolkit";
import { filterVans } from "../service/dataTransform";

const initialState = {
  result: [],
  typeVan: "",
  filterVansList: [],
};

const vansParamsSlice = createSlice({
  name: "vansParams",
  initialState,
    reducers: {
    setResult: (prevState, action) => ({
          ...prevState,
          result: action.payload
    }),
      resetVans: (state) => initialState,
      setFilterVansList: (prevState, action) => ({
        ...prevState,
      filterVansList: action.payload
    }),
      setTypeVan: (prevState, action) => 
            ({
                ...prevState,
          typeVan: action.payload,
          filterVansList: filterVans(prevState.result, action.payload) 
            })
        ,
      setVanChecked: (prevState, action) => ({
      ...prevState,
        filterVansList: prevState.filterVansList.map((item) => {
      if (item.coach._id === action.payload) {
        return {...item, checked: !item.checked}
      } else {
        return item
      }
    })
      }),
  },
});

export const { setResult, resetVans, setFilterVansList, setTypeVan, setVanChecked } =
  vansParamsSlice.actions;
export default vansParamsSlice.reducer;