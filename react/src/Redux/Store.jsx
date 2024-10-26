import { configureStore } from "@reduxjs/toolkit";
import CityReducer from "./ReducerAPI/CityReducer";
import ConsultationsReducer from "./ReducerAPI/ConsultationsReducer";
import CourseCategoryReducer from "./ReducerAPI/CourseCategoryReducer";
import CourseReducer from "./ReducerAPI/CourseReducer";
import AgencyReducer from "./ReducerAPI/AgencyReducer";
export const store = configureStore({
  reducer: {
    number: (state = 1) => state,
    CityReducer,
    ConsultationsReducer,
    CourseCategoryReducer,
    CourseReducer,
    AgencyReducer,
  },
});
