import UserAPI from '../../constants/userConstants';
import axiosInstance from '../axiosInstance';

export const callUserApi = async(payload) => {
    // const {name, secret, id, password, endPoint, code}=payload;
    const {data = {}} = await axiosInstance.post(UserAPI.couponApi, {payload});
    return data;
};