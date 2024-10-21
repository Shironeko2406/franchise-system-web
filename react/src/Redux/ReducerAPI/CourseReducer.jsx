import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";

const initialState = {
  course: [],
  totalPagesCount: 0,
};

const CourseReducer = createSlice({
  name: "CourseReducer",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload.items;
      state.totalPagesCount = action.payload.totalPagesCount;
    },
  },
});

export const { setCourse } = CourseReducer.actions;

export default CourseReducer.reducer;
//---------API CALL-------------
export const GetCourseActionAsync = (courseCategoryId) => {
  return async (dispatch) => {
    try {
      const res = await httpClient.get(`/api/v1/courses`, {
        params: {
          //thêm các param cần thiết
          CourseCategoryId: courseCategoryId
        },
      });
      dispatch(setCourse(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};
