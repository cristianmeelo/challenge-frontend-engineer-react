import { createContext, useEffect, useState } from 'react';
import { ToastLoading, ToastSuccessful, ToastError } from '@/utils/notifications/notifications';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getUsers, updateUser } from '@/services/http';



const initialUsersContext: UsersContextProps = {
  isLoading: true,
  usersData: [],
  setUsersData: () => {},
  handleUpdateUser: () => {},
};

export const UsersContext = createContext<UsersContextProps>(initialUsersContext);

export const UsersProvider = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: Locale;
}) => {
  const emptyUserData: User[] = [];

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

  const handleUpdateUser = async (
    record: User | undefined,
    setUsersData: React.Dispatch<React.SetStateAction<User[]>>
  ) => {
    const loadingToast = ToastLoading(`${dict.toast_notifications.loading}`);

    try {
      if (record) {
        const updatedData = {
          name: record.name,
          email: record.email,
          companyId: record.companyId,
          unitId: record.unitId,
        };
        const updatedUser = await updateUser(record.id, updatedData);

        setUsersData((prevUsers) => {
          const updateUsers = prevUsers.map((user) => {
            if (user.id === updatedUser.id) {
              return updatedUser;
            } else {
              return user;
            }
          });
          return updateUsers;
        });
        ToastSuccessful(loadingToast, `${dict.toast_notifications.success}`);
      }
    } catch (error) {
      ToastError(loadingToast, `${dict.toast_notifications.error}`);
    }
  };

  const context = {
    fetchUsersData,
    isLoading,
    usersData,
    setUsersData,
    handleUpdateUser,
  };

  return <UsersContext.Provider value={context}>{children}</UsersContext.Provider>;
};
