import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";
import { message } from "antd";

const AgencyReducer = createSlice({
    name: "AgencyReducer"
});

export default AgencyReducer.reducer;
//-----------API-CALL----------
export const RegisterAgencyActionAsync = (data) => {
    return async () => {
        try {
            console.log("data register", data);
            const res = await httpClient.post(`/api/v1/agencies`, data);
            if (res.isSuccess && res.data) {
                message.success(`${res.message}`);
                return true;
            } else if (res.isSuccess && !res.data) {
                message.error(`${res.message}`);
                return false;
            } else {
                throw new Error(`${res.message}`);
            }
        } catch (error) {
            console.error(error);
            message.error("Đã xảy ra lỗi, vui lòng thử lại sau.");
            return false;
        }
    }
};
