import AdminAPI from "../../constants/adminConstants";
import axiosInstance from "../axiosInstance";

export const callAllocateMasterApi = async (payload) => {
  const { data = {} } = await axiosInstance.post(AdminAPI.allocateMasterApi, {
    payload,
  });
  return data;
};
