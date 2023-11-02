import UserAdminApi from '../../constants/userAdminConstrants';
import axiosInstance from '../axiosInstance';

export const AbandonedCartApi = async() => {
    const {data = {}} = await axiosInstance.get(UserAdminApi.AbandonedCart);
    return data;
};