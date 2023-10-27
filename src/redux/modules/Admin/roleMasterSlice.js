import { createSlice } from "@reduxjs/toolkit";

export const roleMasterSlice = createSlice({
  name: "roleMaster",
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: "",
  },
  reducers: {
    onRoleMasterSubmit: (state) => {
      return {
        ...state,
        isLoading: true,
        data: {},
        message: "",
        error: {},
        isError: false,
      };
    },
    onRoleMasterSubmitSuccess: (state, { payload }) => {
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
    onRoleMasterSubmitError: (state, { payload }) => {
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
    onRoleMasterReset: (state) => {
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
  onRoleMasterSubmit,
  onRoleMasterReset,
  onRoleMasterSubmitError,
  onRoleMasterSubmitSuccess,
} = roleMasterSlice.actions;

export default roleMasterSlice.reducer;
