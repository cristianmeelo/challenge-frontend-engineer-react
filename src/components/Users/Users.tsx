import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useUsersContext } from '@/hooks';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { EditUserModal, UsersTable } from '@/components/Users';

export const Users: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User>();
  const { handleUpdateUser, setUsersData } = useUsersContext();

  const handleEditClick = (user: User) => {
    setIsEditing(true);
    setEditingUser({ ...user });
  };

  const onCancel: VoidFunction = () => {
    setIsEditing(false);
    setEditingUser(undefined);
  };

  const onOk: VoidFunction = () => {
    handleUpdateUser(editingUser, setUsersData);
    setIsEditing(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />
      <UsersTable language={language} handleEditClick={handleEditClick} />
      <EditUserModal
        isOpen={isEditing}
        value={editingUser}
        title={dict.modal.edit.user}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
        language={language}
        onCancel={onCancel}
        onOk={onOk}
        onChange={(field: string, value: string) =>
          setEditingUser((prev) => {
            return { ...prev!, [field]: value };
          })
        }
        selectCompany={(company: Company) => {
          setEditingUser((prev) => ({
            ...prev!,
            companyId: company.id,
          }));
        }}
        selectUnit={(unit: Unit) => {
          setEditingUser((prev) => ({
            ...prev!,
            unitId: unit.id,
          }));
        }}
      />
      <ToastContainer />
    </>
  );
};
