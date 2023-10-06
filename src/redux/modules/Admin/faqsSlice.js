import { createSlice } from '@reduxjs/toolkit';

export const faqsSlice = createSlice({
  name: 'faqs',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onFaqsSubmit: (state) => {
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onFaqsSubmitSuccess: (state, { payload }) => {
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
    onFaqsSubmitError: (state, { payload }) => {
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
    onFaqsReset: (state) => {
      return { ...state, isLoading: false, data: {}, message: '', error: {}, status_code: 400, isError: false };
    },
  }
});

export const { onFaqsSubmit, onFaqsSubmitError, onFaqsSubmitSuccess, onFaqsReset} =
  faqsSlice.actions;

export default faqsSlice.reducer;
