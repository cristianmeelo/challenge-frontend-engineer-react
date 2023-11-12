import { createContext, useEffect, useState } from 'react';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getUnits, updateUnit } from '@/services/http';

interface UnitsContextProps {
  isLoading: boolean;
  unitsData: Unit[];
  setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>;
  handleUpdateUnit: (
    record: Unit | undefined,
    setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>
  ) => void;
}

const initialUnitsContext: UnitsContextProps = {
  isLoading: true,
  unitsData: [],
  setUnitsData: () => {},
  handleUpdateUnit: () => {},
};

export const UnitsContext = createContext<UnitsContextProps>(initialUnitsContext);

export const UnitsProvider = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) => {
  const emptyUnitData: Unit[] = [];

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [unitsData, setUnitsData] = useState<Unit[]>(emptyUnitData);

  const dict = getLanguageUseClient(language);

  useEffect(() => {
    fetchUnitsData();
  }, []);

  const fetchUnitsData = async () => {
    try {
      const data = await getUnits();
      setUnitsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUpdateUnit = async (
    record: Unit | undefined,
    setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>
  ) => {
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

  const context = {
    fetchUnitsData,
    isLoading,
    unitsData,
    setUnitsData,
    handleUpdateUnit,
  };

  return <UnitsContext.Provider value={context}>{children}</UnitsContext.Provider>;
};
