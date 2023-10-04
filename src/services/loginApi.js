import API from '../constants/serviceConstants';
import axiosInstance from './axiosInstance';

export const callLoginApi = async (email, password) => {
  const { data = {} } = await axiosInstance.post(API.loginApi, { email, password });
  return data;
};
