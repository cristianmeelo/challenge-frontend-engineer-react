import { useState } from 'react';

import { faker } from '@faker-js/faker';
import { getUnits, updateUnit } from '@/services/http';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

const emptyUnitData: Unit[] = [];

export const useUnitsData = (language: Locale) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [unitsData, setUnitsData] = useState<Unit[]>(emptyUnitData);
  const [randomAvatar, setRandomAvatar] = useState<string>();
  const dict = getLanguageUseClient(language);

  const fetchCompaniesData = async () => {
    try {
      const data = await getUnits();
      setUnitsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchRandomAvatar = () => {
    setRandomAvatar(
      faker.image.urlLoremFlickr({
        category: 'abstract',
      })
    );
  };

  // const handleUpdateCompany = async (record: Company | undefined, setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>) => {
  //   const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);

  //   try {
  //     if (record) {
  //       const updatedData = { name: record.name };
  //       const updatedCompany = await updateUnit(record.id, updatedData);

  //       setCompaniesData((prevCompanies) => {
  //         const updatedCompanies = prevCompanies.map((company) => {
  //           if (company.id === updatedCompany.id) {
  //             return updatedCompany;
  //           } else {
  //             return company;
  //           }
  //         });

  //         return updatedCompanies;
  //       });
  //       ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
  //     }
  //   } catch (error) {
  //     ToastError(loadingToast, `${dict.toast_notifications.error}`);
  //   }

  // };

  return {
    fetchCompaniesData,
    fetchRandomAvatar,
    isLoading,
    unitsData,
    randomAvatar,
    setUnitsData,
    // handleUpdateUnit,
  };
};
