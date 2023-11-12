import { useContext } from 'react';
import { CompaniesContext } from '@/contexts/Companies/Companies';
import { UnitsContext } from '@/contexts/Units/Units';
import { UsersContext } from '@/contexts/Users/Users';
import { WorkordersContext } from '@/contexts/Workorders/Workorders';
import { AssetsContext } from '@/contexts/Assets/Assets';

export const useCompaniesContext = () => {
  const context = useContext(CompaniesContext);
  return context;
};

export const useUnitsContext = () => {
  const context = useContext(UnitsContext);
  return context;
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  return context;
};

export const useWorkordersContext = () => {
  const context = useContext(WorkordersContext);
  return context;
};

export const useAssetsContext = () => {
  const context = useContext(AssetsContext);
  return context;
};
