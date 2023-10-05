import AdminAPI from '../../constants/adminConstants';
import axiosInstance from '../axiosInstance';

export const callClientMasterApi = async (payload) => {
  const { name, number, email, domain, dns, ipAddress, domainProvider, color, stagingKey, stagingSecretKey, productionKey, productionSecretKey } = payload;
  const { data = {} } = await axiosInstance.post(AdminAPI.clientMasterApi, { payload });
  return data;
};
