import API from '../../constants/serviceConstants';
import axiosInstance from '../axiosInstance';

export const callProductApi = async() => {
    const {data = {}} = await axiosInstance.get(API.ProductApi);
    return data;
};