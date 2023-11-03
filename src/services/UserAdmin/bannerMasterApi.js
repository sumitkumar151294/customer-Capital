import UserAdminApi from "../../constants/userAdminConstrants";
import axiosInstance from "../axiosInstance";

export const bannerMasterApi = async (payload) => {
  debugger
  const {name, number, order, status} = payload;
  const { data = {} } = await axiosInstance.post(UserAdminApi.bannerMasterApi, { payload });
  return data;
};
