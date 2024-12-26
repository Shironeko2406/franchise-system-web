// RegisterCourseReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { httpClient } from "../../Utils/Interceptor";
import { message } from "antd";

const initialState = {
};

const RegisterCourseReducer = createSlice({
    name: 'RegisterCourseReducer',
    initialState
});

export default RegisterCourseReducer.reducer;

//-----------API-CALL----------

export const RegisterCourseActionAsync = (registerCourseData) => {
    return async (dispatch) => {
        try {
            const res = await httpClient.post(`api/v1/register-course`, registerCourseData);
            if (res.isSuccess && res.data) {
                message.success(`${res.message}`);
                return { isSuccess: res.isSuccess, data: res.data, message: res.message };
            } else if (res.isSuccess && !res.data) {
                message.error(`${res.message}`);
                return { isSuccess: res.isSuccess, data: null, message: res.message };
            } else {
                throw new Error(`${res.message}`);
            }
        } catch (error) {
            console.error(error);
            // Hiển thị thông báo lỗi nếu không kết nối được tới server
            message.error("Đã xảy ra lỗi, vui lòng thử lại sau.");
            return { isSuccess: false, data: null, message: error.message };
        }
    };
};
