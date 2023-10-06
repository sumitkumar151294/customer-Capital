import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callFaqsApi = async (payload) => {
  const { category, question, answer } = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.faqsApi, { payload });
  return data;
};
