import UserAdminApi from '../../constants/userAdminConstrants';
import axiosInstance from '../axiosInstance';

export const callEmailEventApi = async (payload) => {
  const {pageName, shortDescription, longDescription} = payload;
  const { data = {} } = await axiosInstance.post(UserAdminApi.emailEventApi, { payload });
  return data;
};
