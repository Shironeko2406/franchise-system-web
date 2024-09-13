import { configureStore } from "@reduxjs/toolkit";
import CityReducer from "./ReducerAPI/CityReducer";

export const store = configureStore({
    reducer: {
      number: (state = 1) => state,
      CityReducer,
    },
  });
  