import UserAdminApi from '../../constants/userAdminConstrants';
import axiosInstance from '../axiosInstance';

export const ClientCommissionApi = async() => {
    const {data = {}} = await axiosInstance.get(UserAdminApi.ClientCommission);
    return data;
};