import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callVendorApi = async (payload) => {
  const {name, secret, id, password, endPoint, code} = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.clientMasterApi, { payload });
  return data;
};
