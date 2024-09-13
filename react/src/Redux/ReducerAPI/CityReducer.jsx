import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cityData: [],
};

const CityReducer = createSlice({
  name: "CityReducer",
  initialState,
  reducers: {
    setCityData: (state, action) => {
      state.cityData = action.payload;
    },
  },
});

export const { setCityData } = CityReducer.actions;

export default CityReducer.reducer;
//-------API call--------------
export const GetCityDataActionAsync = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`
      );
      const action = setCityData(res.data);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};
