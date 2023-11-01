import API from '../constants/serviceConstants';
import axiosInstance from './axiosInstance';

export const callLoginApi = async (payload) => {
  const { data = {} } = await axiosInstance.post(API.loginApi, { payload });
  return data;
};


export const callSignUpApi = async (payload) => {
  const { data = {} } = await axiosInstance.post(API.signupApi, { payload });
  return data;
};

export const callUpdateApi = async (payload) => {
  const { data = {} } = await axiosInstance.post(API.updateApi, { payload });
  return data;
};