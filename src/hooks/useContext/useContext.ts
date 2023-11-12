import { CompaniesContext } from '@/contexts/Companies/Companies';
import { useContext } from 'react';

export const useCompaniesContext = () => {
  const context = useContext(CompaniesContext);
  return context;
};
