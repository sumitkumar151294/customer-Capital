import { createSlice } from '@reduxjs/toolkit';

export const offerMasterSlice = createSlice({
  name: 'offerMaster',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onofferMasterSubmit: (state) => {
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onofferMasterSubmitSuccess: (state, { payload }) => {
      const { data = {}, message = '', status_code = 200 } = payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        data,
        error: {},
        message,
        status_code
      };
    },
    onofferMasterSubmitError: (state, { payload }) => {
      const { data = {}, message = '', status_code = 200 } = payload;
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: data,
        message,
        status_code
      };
    },
    onofferMasterReset: (state) => {
      return { ...state, isLoading: false, data: {}, message: '', error: {}, status_code: 400, isError: false };
    },
  }
});

export const { onofferMasterSubmit, onofferMasterSubmitError, onofferMasterSubmitSuccess, onofferMasterReset} =
  offerMasterSlice.actions;

export default offerMasterSlice.reducer;
