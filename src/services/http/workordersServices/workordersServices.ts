import { AxiosResponse } from 'axios';
import api from '../api';

export const getWorkorders = async (): Promise<Workorder[]> => {
  const response: AxiosResponse<Workorder[]> = await api.get('/workorders');
  return response.data;
};

export const updateWorkorder = async (
  workorderId: number,
  updatedData: {
    assetId?: string;
    assignedUserIds?: string[];
    checklist?: {
      completed: boolean;
      task: string;
    }[];
    description?: string;
    priority?: Priority;
    status?: WorkOrderStatus;
    title?: string;
  }
): Promise<Workorder> => {
  const response: AxiosResponse<Workorder> = await api.put(
    `/workorders/${workorderId}`,
    updatedData
  );
  return response.data;
};
