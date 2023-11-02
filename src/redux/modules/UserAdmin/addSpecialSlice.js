import { createSlice } from '@reduxjs/toolkit';

export const addSpecialSlice = createSlice({
  name: 'addSpecial',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onAddSpecialSubmit: (state) => {
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onAddSpecialSubmitSuccess: (state, { payload }) => {
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
    onAddSpecialSubmitError: (state, { payload }) => {
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
    onAddSpecialReset: (state) => {
      return { ...state, isLoading: false, data: {}, message: '', error: {}, status_code: 400, isError: false };
    },
  }
});

export const { onAddSpecialSubmit, onAddSpecialSubmitError, onAddSpecialSubmitSuccess, onAddSpecialReset} =
  addSpecialSlice.actions;

export default addSpecialSlice.reducer;
