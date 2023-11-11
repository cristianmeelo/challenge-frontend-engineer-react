import { useState, useEffect } from 'react';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';

import { getUsers, updateUser } from '@/services/http';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

const emptyUserData: User[] = [];

export const useUsersData = (language: Locale) => {
  const dict = getLanguageUseClient(language);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [usersData, setUsersData] = useState<User[]>(emptyUserData);

  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const data = await getUsers();
      setUsersData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // const handleUpdateUnit = async (record: Unit | undefined, setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>) => {
  //   const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);

  //   try {
  //     if (record) {
  //       const updatedData = { name: record.name, companyId: record.companyId };
  //       const updatedUnit = await updateUsers(record.id, updatedData);

  //       setUnitsData((prevUnits) => {
  //         const updateUnits = prevUnits.map((unit) => {
  //           if (unit.id === updatedUnit.id) {
  //             return updatedUnit;
  //           } else {
  //             return unit;
  //           }
  //         });

  //         return updateUnits;
  //       });
  //       ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
  //     }
  //   } catch (error) {
  //     ToastError(loadingToast, `${dict.toast_notifications.error}`);
  //   }
  // };

  return {
    fetchUsersData,
    isLoading,
    usersData,
    setUsersData,
    // handleUpdateUnit,
  };
};
