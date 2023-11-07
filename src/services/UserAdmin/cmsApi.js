import UserAdminApi from '../../constants/userAdminConstrants';
import axiosInstance from '../axiosInstance';

export const callCmsApi = async (payload) => {
  const {pageName, shortDescription, longDescription} = payload;
  const { data = {} } = await axiosInstance.post(UserAdminApi.cmsApi, { payload });
  return data;
};
