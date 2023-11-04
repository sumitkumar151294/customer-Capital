import { createSlice } from "@reduxjs/toolkit";

export const bannerMasterSlice = createSlice({
  name: "bannerMaster",
  initialState: {
    isLoading: false,
    isError: false,
    data: {},
    error: {},
    message: "",
  },
  reducers: {
    onBannerMasterSubmit: (state) => {
      return {
        ...state,
        isLoading: true,
        data: {},
        message: "",
        error: {},
        isError: false,
      };
    },
    onBannerMasterSubmitSuccess: (state, { payload }) => {
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
    onBannerMasterSubmitError: (state, { payload }) => {
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
    onBannerMasterReset: (state) => {
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
  onBannerMasterSubmit,
  onBannerMasterSubmitError,
  onBannerMasterSubmitSuccess,
  onBannerMasterReset,
} = bannerMasterSlice.actions;

export default bannerMasterSlice.reducer;
