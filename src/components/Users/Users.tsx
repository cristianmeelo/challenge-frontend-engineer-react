import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { EditUserModal } from './EditUserModal/EditUserModal';
import { useUsersContext } from '@/hooks';
import { ListView } from './ListView/ListView';

export const Users: React.FC<ViewProps> = ({ language }) => {
  const { handleUpdateUser, setUsersData } = useUsersContext();

  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUser, setEditingUser] = useState<User>();

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

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_4} />

      <ListView language={language} handleEditClick={handleEditClick} />

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
          }));
        }}
        handleUnitMenuClicked={(unit: Unit) => {
          setEditingUser((prev) => ({
            ...prev!,
            unitId: unit.id,
          }));
        }}
        language={language}
      />
      <ToastContainer />
    </>
  );
};
