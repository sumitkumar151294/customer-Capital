import { createSlice } from '@reduxjs/toolkit';

export const ClientCommissionSlice = createSlice({
  name: 'ClientCommission',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onClientCommissionSubmit: (state) => {
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onClientCommissionSubmitSuccess: (state, { payload }) => {
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
    onClientCommissionSubmitError: (state, { payload }) => {
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
    onClientCommissionReset: (state) => {
      return { ...state, isLoading: false, data: {}, message: '', error: {}, status_code: 400, isError: false };
    },
  }
});

export const { onClientCommissionSubmit, onClientCommissionSubmitError, onClientCommissionSubmitSuccess, onClientCommissionReset} =
  ClientCommissionSlice.actions;

export default ClientCommissionSlice.reducer;
