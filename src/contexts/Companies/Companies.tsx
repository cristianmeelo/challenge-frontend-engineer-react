/**
 * CompaniesContext é utilizado para fornecer informações sobre empresas
 * aos componentes da aplicação.
 */
import { createContext, useState } from 'react';

interface CompaniesContextProps {
  isContext: string;
  setIsContext: React.Dispatch<React.SetStateAction<string>>;
}

export const CompaniesContext = createContext<CompaniesContextProps>({
  isContext: 'default',
  setIsContext: () => {},
});

export const CompaniesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isContext, setIsContext] = useState('sim');

  const context = {
    isContext,
    setIsContext,
  };

  return <CompaniesContext.Provider value={context}>{children}</CompaniesContext.Provider>;
};
