import { useContext } from 'react';
import { CompaniesContext } from '@/contexts/Companies/Companies';
import { UnitsContext } from '@/contexts/Units/Units';
import { UsersContext } from '@/contexts/Users/Users';

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
