import { AxiosResponse } from 'axios';
import api from '../api';

export const getUsers = async (): Promise<User[]> => {
  const response: AxiosResponse<User[]> = await api.get('/users');
  return response.data;
};

export const updateUser = async (
  userId: string,
  updatedData: { name: string; email:string, companyId: string; unitId: string }
): Promise<User> => {
  const response: AxiosResponse<User> = await api.put(`/users/${userId}`, updatedData);
  return response.data;
};
