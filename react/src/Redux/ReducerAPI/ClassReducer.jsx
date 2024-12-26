import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";
import { message } from "antd";

const initialState = {
  classData: [],
};

const ClassReducer = createSlice({
  name: "ClassReducer",
  initialState,
  reducers: {
    setClass: (state, action) => {
      state.classData = action.payload;
    },
  },
});

export const { setClass } = ClassReducer.actions;

export default ClassReducer.reducer;

//-----------API-CALL----------
export const GetClassesActionAsync = (courseId, agencid) => {
  return async (dispatch) => {
    try {
      const response = await httpClient.get(`api/v1/classes`, {
        params: { courseId, agencid }
      });
      if (response.isSuccess) {
        dispatch(setClass(response.data));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
      message.error("Đã xảy ra lỗi khi lấy danh sách lớp học.");
    }
  };
};
