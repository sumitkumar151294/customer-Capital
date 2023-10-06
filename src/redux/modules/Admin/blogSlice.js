import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: ''
  },
  reducers: {
    onBlogSubmit: (state) => {
      return { ...state, isLoading: true, data: {}, message: '', error: {}, isError: false };
    },
    onBlogSubmitSuccess: (state, { payload }) => {
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
    onBlogSubmitError: (state, { payload }) => {
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
    onBlogReset: (state) => {
      return { ...state, isLoading: false, data: {}, message: '', error: {}, status_code: 400, isError: false };
    },
  }
});

export const { onBlogSubmit, onBlogSubmitError, onBlogSubmitSuccess, onBlogReset} =
  blogSlice.actions;

export default blogSlice.reducer;
