import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesContext } from '@/hooks';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { EditCompanyModal, CompaniesList } from '@/components/Companies';

export const Companies: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCompany, setEditingCompany] = useState<Company>();
  const { handleUpdateCompany, setCompaniesData } = useCompaniesContext();

  const handleEditClick = (company: Company) => {
    setIsEditing(true);
    setEditingCompany({ ...company });
  };

  const onCancel: VoidFunction = () => {
    setIsEditing(false);
    setEditingCompany(undefined);
  };

  const onOk: VoidFunction = () => {
    handleUpdateCompany(editingCompany, setCompaniesData);
    setIsEditing(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_2} />
      <CompaniesList onEdit={handleEditClick} />
      <EditCompanyModal
        isOpen={isEditing}
        value={editingCompany}
        title={dict.modal.edit.company}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
        onCancel={onCancel}
        onOk={onOk}
        onChange={(e: { target: { value: string } }) =>
          setEditingCompany((prev) => {
            return { ...prev!, name: e.target.value };
          })
        }
      />
      <ToastContainer />
    </>
  );
};
