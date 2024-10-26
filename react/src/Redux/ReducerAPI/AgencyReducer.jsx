import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";
import { message } from "antd";

const initialState = {
    agencyData: [],
};

const AgencyReducer = createSlice({
    name: "AgencyReducer",
    initialState,
    reducers: {
        setAgency: (state, action) => {
            state.agencyData = action.payload;
        },
    },
});

export const { setAgency } = AgencyReducer.actions;

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

export const GetAgencyAddresses = () => {
    return async (dispatch) => {
        try {
            const response = await httpClient.get(`/api/v1/agencies/addresses`);
            console.log("response", response);
            if (response.isSuccess) {
                dispatch(setAgency(response.data))
            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            console.error("Error fetching agencies:", error);
            message.error("Đã xảy ra lỗi khi lấy danh sách chi nhánh.");
        }
    }
};
