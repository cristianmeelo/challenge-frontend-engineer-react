import { createContext, useEffect, useState } from 'react';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getWorkorders, updateWorkorder } from '@/services/http';

const initialWorkordersContext: WorkordersContextProps = {
  isLoading: true,
  workordersData: [],
  setWorkordersData: () => {},
  handleUpdateWorkorder: () => {},
};

export const WorkordersContext = createContext<WorkordersContextProps>(initialWorkordersContext);

export const WorkordersProvider = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) => {
  const emptyWorkorderData: Workorder[] = [];

  const dict = getLanguageUseClient(language);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [workordersData, setWorkordersData] = useState<Workorder[]>(emptyWorkorderData);

  useEffect(() => {
    fetchWorkordersData();
  }, []);

  const fetchWorkordersData = async () => {
    try {
      const data = await getWorkorders();
      setWorkordersData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUpdateWorkorder = async (
    record: Workorder | undefined,
    setWorkordersData: React.Dispatch<React.SetStateAction<Workorder[]>>
  ) => {
    const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);

    try {
      if (record) {
        const updatedData = {
          assetId: record.assetId,
          assignedUserIds: record.assignedUserIds,
          checklist: record.checklist,
          description: record.description,
          priority: record.priority,
          status: record.status,
          title: record.title,
        };
        const updatedWorkorder = await updateWorkorder(record.id, updatedData);

        setWorkordersData((prevWorkorders) => {
          const updatedWorkorders = prevWorkorders?.map((workorder) => {
            if (workorder.id === updatedWorkorder.id) {
              return updatedWorkorder;
            } else {
              return workorder;
            }
          });
          return updatedWorkorders;
        });
        ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
      }
    } catch (error) {
      ToastError(loadingToast, `${dict.toast_notifications.error}`);
    }
  };

  const context = {
    fetchWorkordersData,
    isLoading,
    workordersData,
    setWorkordersData,
    handleUpdateWorkorder,
  };

  return <WorkordersContext.Provider value={context}>{children}</WorkordersContext.Provider>;
};
