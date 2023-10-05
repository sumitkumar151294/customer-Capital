import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callCmsApi = async (payload) => {
  const {pageName, shortDescription, longDescription} = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.cmsApi, { payload });
  return data;
};
