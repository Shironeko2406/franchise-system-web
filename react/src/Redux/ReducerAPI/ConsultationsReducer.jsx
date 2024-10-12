import { createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../Utils/Interceptor";
import { message } from "antd";

const initialState = {};

const ConsultationsReducer = createSlice({
  name: "ConsultationsReducer",
  initialState,
  reducers: {},
});

export const {} = ConsultationsReducer.actions;

export default ConsultationsReducer.reducer;
//-----------API-CALL----------
export const CreateConsultFranchiseActionAsync = (data) => {
  return async (dispatch) => {
    try {
      const res = await httpClient.post(`/api/v1/consultations`, data);
      if (res.isSuccess && res.data) {
        message.success(res.message);
        return true;
      } else {
        message.error(res.message);
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };
};
