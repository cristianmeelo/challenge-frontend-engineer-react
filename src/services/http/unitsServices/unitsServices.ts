import { AxiosResponse } from 'axios';
import api from '../api';

export const getUnits = async (): Promise<Unit[]> => {
  const response: AxiosResponse<Unit[]> = await api.get('/units');
  return response.data;
};

export const updateUnit = async (unitId: string, updatedData: { name: string; companyId: string }): Promise<Unit> => {
  const response: AxiosResponse<Unit> = await api.put(`/units/${unitId}`, updatedData);
  return response.data;
};
