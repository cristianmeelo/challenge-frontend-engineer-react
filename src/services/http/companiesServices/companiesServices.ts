import { AxiosResponse } from 'axios';
import api from '../api';

export const getCompanies = async (): Promise<Company[]> => {
  const response: AxiosResponse<Company[]> = await api.get('/companies');
  return response.data;
};

export const updateCompany = async (companyId: string, updatedData: { name: string }): Promise<Company> => {
  const response: AxiosResponse<Company> = await api.put(`/companies/${companyId}`, updatedData);
  return response.data;
};
