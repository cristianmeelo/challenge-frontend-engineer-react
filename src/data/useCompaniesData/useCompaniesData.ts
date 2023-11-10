import { useState } from 'react';
import { getCompanies, updateCompany } from '@/services/http';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

const emptyCompaniesData: Company[] = [];

export const useCompaniesData = (language: Locale) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [companiesData, setCompaniesData] = useState<Company[]>(emptyCompaniesData);
  const dict = getLanguageUseClient(language);

  const fetchCompaniesData = async () => {
    try {
      const data = await getCompanies();
      setCompaniesData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUpdateCompany = async (record: Company | undefined, setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>) => {
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

  return {
    fetchCompaniesData,
    isLoading,
    companiesData,
    setCompaniesData,
    handleUpdateCompany,
  };
};