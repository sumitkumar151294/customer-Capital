import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callBlogApi = async (payload) => {
  const { name, date, heading, longDescription } = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.blogApi, { payload });
  return data;
};
