import { createSlice } from '@reduxjs/toolkit'
import { httpClient } from '../../Utils/Interceptor';
import { message } from 'antd';

const initialState = {
    packageTicket: []
}

const PackageReducer = createSlice({
  name: 'PackageReducer',
  initialState,
  reducers: {
    setPackageTicket: (state, action) => {
        state.packageTicket = action.payload
    }
  }
});

export const {setPackageTicket} = PackageReducer.actions

export default PackageReducer.reducer


export const GetPackageActionAsync = () => {
    return async (dispatch) => {
      try {
        const response = await httpClient.get(`/api/v1/standard-packages`);
        if (response.isSuccess) {
          dispatch(setPackageTicket(response.data));
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        console.error("Error fetching:", error);
        message.error("Lỗi hệ thống");
      }
    };
  };
  