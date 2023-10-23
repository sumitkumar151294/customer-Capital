import AdminAPI from "../../constants/adminConstants";
import axiosInstance from "../axiosInstance";

export const callRoleMasterApi = async (payload) => {
  const { data = {} } = await axiosInstance.post(AdminAPI.roleMasterApi, {
    payload,
  });
  return data;
};
