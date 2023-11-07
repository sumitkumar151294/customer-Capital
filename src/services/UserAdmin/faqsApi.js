import UserAdminApi from '../../constants/userAdminConstrants';
import axiosInstance from '../axiosInstance';

export const callFaqsApi = async (payload) => {
  const { category, question, answer } = payload;
  const { data = {} } = await axiosInstance.post(UserAdminApi.faqsApi, { payload });
  return data;
};
