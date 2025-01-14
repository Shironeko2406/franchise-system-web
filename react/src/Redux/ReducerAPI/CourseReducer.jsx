import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";
import { message } from "antd";

const initialState = {
  course: [],
  courseAvailable: [],
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
    setCourseAvailable: (state, action)=>{
      state.courseAvailable = action.payload
    }
  },
});

export const { setCourse, setCourseAvailable } = CourseReducer.actions;

export default CourseReducer.reducer;
//---------API CALL-------------
export const GetCourseActionAsync = (courseCategoryId) => {
  return async (dispatch) => {
    try {
      const res = await httpClient.get(`/api/v1/courses`, {
        params: {
          //thêm các param cần thiết
          Status: "AvailableForFranchise",
          CourseCategoryId: courseCategoryId
        },
      });
      dispatch(setCourse(res.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const GetAllCoursesAvailableActionAsync = () => {
  return async (dispatch) => {
    try {
      const response = await httpClient.get(`api/v1/courses/available`);
      console.log("response", response);
      if (response.isSuccess) {
        dispatch(setCourseAvailable(response.data))
      } else {
        throw new Error(response.message)
      }
    } catch (error) {
      console.error("Error fetching agencies:", error);
      message.error("Đã xảy ra lỗi khi lấy danh sách khóa học!");
    }
  }
};
