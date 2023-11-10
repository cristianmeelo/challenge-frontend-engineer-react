import { useState } from 'react';

import { getUnits, updateUnit } from '@/services/http';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

const emptyUnitData: Unit[] = [];

export const useUnitsData = (language: Locale) => {
  const dict = getLanguageUseClient(language);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [unitsData, setUnitsData] = useState<Unit[]>(emptyUnitData);

  const fetchUnitsData = async () => {
    try {
      const data = await getUnits();
      setUnitsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUpdateUnit = async (record: Unit | undefined, setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>) => {
    const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);

    try {
      if (record) {
        const updatedData = { name: record.name, companyId: record.companyId };
        const updatedUnit = await updateUnit(record.id, updatedData);

        setUnitsData((prevUnits) => {
          const updateUnits = prevUnits.map((unit) => {
            if (unit.id === updatedUnit.id) {
              return updatedUnit;
            } else {
              return unit;
            }
          });

          return updateUnits;
        });
        ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
      }
    } catch (error) {
      ToastError(loadingToast, `${dict.toast_notifications.error}`);
    }
  };

  return {
    fetchUnitsData,
    isLoading,
    unitsData,
    setUnitsData,
    handleUpdateUnit,
  };
};
