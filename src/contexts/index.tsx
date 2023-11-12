import { CompaniesProvider } from './Companies/Companies';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <CompaniesProvider>{children}</CompaniesProvider>;
};
