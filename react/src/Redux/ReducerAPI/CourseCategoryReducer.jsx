import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";

const initialState = {
  courseCategory: [],
};

const CourseCategoryReducer = createSlice({
  name: "CourseCategoryReducer",
  initialState,
  reducers: {
    setCourseCategory: (state, action) => {
      state.courseCategory = action.payload;
    },
  },
});

export const { setCourseCategory } = CourseCategoryReducer.actions;

export default CourseCategoryReducer.reducer;
//-------API-CALL---------
export const GetCourseCategoryActionAsync = () => {
  return async (dispatch) => {
    try {
      const res = await httpClient.get(`/api/v1/course-categories`);
      dispatch(setCourseCategory(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};
