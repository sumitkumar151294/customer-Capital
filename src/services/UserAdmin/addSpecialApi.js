import UserAdminApi from "../../constants/userAdminConstrants";
import axiosInstance from "../axiosInstance";

export const callAddSpecialApi = async (payload) => {
  debugger
  const {name, number, order, status} = payload;
  const { data = {} } = await axiosInstance.post(UserAdminApi.addSpecialApi, { payload });
  return data;
};
