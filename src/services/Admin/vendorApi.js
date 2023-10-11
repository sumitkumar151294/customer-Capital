import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callVendorApi = async (payload) => {
  debugger
  const {name, secret, id, password, endPoint, code} = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.vendorApi, { payload });
  return data;
};
