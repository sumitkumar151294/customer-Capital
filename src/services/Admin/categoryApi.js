import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callCategoryApi = async (payload) => {
  const {name, secret, id, password, endPoint, code} = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.categoryApi, { payload });
  return data;
};
