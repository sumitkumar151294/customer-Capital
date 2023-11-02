import UserAdminAPI from "../../constants/userAdminConstants";
import axiosInstance from "../axiosInstance";

export const callAddSpecialApi = async (payload) => {
  const {name, number, order, status} = payload;
  const { data = {} } = await axiosInstance.post(UserAdminAPI.addSpecialApi, { payload });
  return data;
};
