import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callUserApi = async (payload) => {
  const {name, secret, id, password, endPoint, code} = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.userApi, { payload });
  return data;
};
