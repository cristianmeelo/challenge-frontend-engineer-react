/**
 * CompaniesContext é utilizado para fornecer informações sobre empresas
 * aos componentes da aplicação.
 */
import { createContext, useEffect, useState } from 'react';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getCompanies, updateCompany } from '@/services/http';

interface CompaniesContextProps {
  isLoading: boolean;
  companiesData: Company[];
  setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>;
  handleUpdateCompany: (
    record: Company | undefined,
    setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>
  ) => void;
}

const initialCompaniesContext: CompaniesContextProps = {
  isLoading: true,
  companiesData: [],
  setCompaniesData: () => {},
  handleUpdateCompany: () => {},
};

export const CompaniesContext = createContext<CompaniesContextProps>(initialCompaniesContext);

export const CompaniesProvider = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) => {
  const emptyCompaniesData: Company[] = [];

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [companiesData, setCompaniesData] = useState<Company[]>(emptyCompaniesData);
  const dict = getLanguageUseClient(language);

  useEffect(() => {
    fetchCompaniesData();
  }, []);

  const fetchCompaniesData = async () => {
    try {
      const data = await getCompanies();
      setCompaniesData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUpdateCompany = async (
    record: Company | undefined,
    setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>
  ) => {
    const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);

    try {
      if (record) {
        const updatedData = { name: record.name };
        const updatedCompany = await updateCompany(record.id, updatedData);

        setCompaniesData((prevCompanies) => {
          const updatedCompanies = prevCompanies.map((company) => {
            if (company.id === updatedCompany.id) {
              return updatedCompany;
            } else {
              return company;
            }
          });

          return updatedCompanies;
        });
        ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
      }
    } catch (error) {
      ToastError(loadingToast, `${dict.toast_notifications.error}`);
    }
  };

  const context = {
    isLoading,
    companiesData,
    setCompaniesData,
    handleUpdateCompany,
  };

  return <CompaniesContext.Provider value={context}>{children}</CompaniesContext.Provider>;
};
