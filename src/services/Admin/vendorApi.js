import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callVendorApi = async (payload) => {
  const { name, number, email, domain, dns, ipAddress, domainProvider, color, stagingKey, stagingSecretKey, productionKey, productionSecretKey } = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.vendorApi, { payload });
  return data;
};
