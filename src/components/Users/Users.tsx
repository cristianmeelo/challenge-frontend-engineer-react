import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Table } from 'antd';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useUsersData } from '@/data';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { EditUserModal } from './EditUserModal/EditUserModal';
import { userColumns } from './userColumns/userColumns';

export const Users: React.FC<UserProps> = ({
  companiesData,
  language,
  setUsersData,
  unitsData,
  usersData,
}) => {
  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User>();
  const { handleUpdateUser } = useUsersData(language);

  const handleEditClick = (user: User) => {
    setIsEditing(true);
    setEditingUser({ ...user });
  };

  const handleEditModalCancel = () => {
    setIsEditing(false);
    setEditingUser(undefined);
  };

  const handleEditModalConfirm = () => {
    handleUpdateUser(editingUser, setUsersData);
    setIsEditing(false);
  };

  const editColumnText = `${dict.table.edit_column}`;
  const columns = userColumns(companiesData, unitsData, handleEditClick, editColumnText);

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />
      <Table
        dataSource={usersData}
        columns={columns}
        bordered
        title={() => `${dict.table.users.title}`}
      />

      <EditUserModal
        isOpen={isEditing}
        onCancel={handleEditModalCancel}
        onConfirm={handleEditModalConfirm}
        value={editingUser}
        title={dict.modal.edit.user}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
        onChange={(field: string, value: string) =>
          setEditingUser((prev) => {
            return { ...prev!, [field]: value };
          })
        }
        handleMenuClick={(company: Company) => {
          setEditingUser((prev) => ({
            ...prev!,
            companyId: company.id,
            // unitId: unit.id,
          }));
        }}
        language={language}
        companies={companiesData}
        units={unitsData}
      />
      <ToastContainer />
    </>
  );
};
