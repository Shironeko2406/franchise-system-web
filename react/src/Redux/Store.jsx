import { configureStore } from "@reduxjs/toolkit";
import CityReducer from "./ReducerAPI/CityReducer";
import ConsultationsReducer from "./ReducerAPI/ConsultationsReducer";

export const store = configureStore({
    reducer: {
      number: (state = 1) => state,
      CityReducer,
      ConsultationsReducer,
    },
  });
  