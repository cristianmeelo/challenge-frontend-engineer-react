import { AxiosResponse } from 'axios';
import api from '../api';

// APIs para Assets

export const getAssets = async (): Promise<Asset[]> => {
  const response: AxiosResponse<Asset[]> = await api.get('/assets');
  return response.data;
};

export const updateAsset = async (
  assetId: number,
  updatedData: {
    assignedUserIds?: number[];
    companyId?: number;
    healthHistory?: {
      status: AssetStatus;
      timestamp: string;
    }[];
    healthscore?: number;
    image?: string;
    metrics?: {
      lastUptimeAt: string;
      totalCollectsUptime: number;
      totalUptime: number;
    };
    model?: string;
    name?: string;
    sensors?: string[];
    specifications?: {
      maxTemp: number;
      power?: number;
      rpm?: number | null;
    };
    status?: AssetStatus;
    unitId?: number;
  }
): Promise<Asset> => {
  const response: AxiosResponse<Asset> = await api.put(`/assets/${assetId}`, updatedData);
  return response.data;
};
