import UserAdminApi from "../../constants/userAdminConstrants";
import axiosInstance from "../axiosInstance";

export const offerMasterApi = async (payload) => {
  
  const { data = {} } = await axiosInstance.post(UserAdminApi.offerMasterApi, {
    payload,
  });
  return data;
};
