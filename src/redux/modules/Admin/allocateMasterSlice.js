import { createSlice } from "@reduxjs/toolkit";

export const allocateMasterSlice = createSlice({
  name: "allocateMaster",
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: "",
  },
  reducers: {
    onAllocateMasterSubmit: (state) => {
      return {
        ...state,
        isLoading: true,
        data: {},
        message: "",
        error: {},
        isError: false,
      };
    },
    onAllocateMasterSubmitSuccess: (state, { payload }) => {
      const { data = {}, message = "", status_code = 200 } = payload;
      return {
        ...state,
        isLoading: false,
        isError: false,
        data,
        error: {},
        message,
        status_code,
      };
    },
    onAllocateMasterSubmitError: (state, { payload }) => {
      const { data = {}, message = "", status_code = 200 } = payload;
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: data,
        message,
        status_code,
      };
    },
    onAllocateMasterReset: (state) => {
      return {
        ...state,
        isLoading: false,
        data: {},
        message: "",
        error: {},
        status_code: 400,
        isError: false,
      };
    },
  },
});

export const {
  onAllocateMasterSubmit,
  onAllocateMasterReset,
  onAllocateMasterSubmitError,
  onAllocateMasterSubmitSuccess,
} = allocateMasterSlice.actions;

export default allocateMasterSlice.reducer;
