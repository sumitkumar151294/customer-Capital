import { createSlice } from '@reduxjs/toolkit';

export const vendorSlice = createSlice({
  name: 'vendor',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onVendorSubmit: (state) => {
      debugger
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onVendorSubmitSuccess: (state, { payload }) => {
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
    onVendorSubmitError: (state, { payload }) => {
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
    onVendorReset: (state) => {
      return { ...state, isLoading: false, data: {}, message: '', error: {}, status_code: 400, isError: false };
    },
  }
});

export const { onVendorSubmit, onVendorSubmitError, onVendorSubmitSuccess, onVendorReset} =
  vendorSlice.actions;

export default vendorSlice.reducer;
