import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesData } from '@/data';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { CompaniesList } from '@/components/Companies/CompaniesList/CompanyList';
import { EditCompanyModal } from '@/components/Companies/EditCompanyModal/EditCompanyModal';

export const Companies: React.FC<CompaniesProps> = ({
  companiesData,
  randomAvatar,
  setCompaniesData,
  language,
  isLoading,
}) => {
  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCompany, setEditingCompany] = useState<Company>();
  const { handleUpdateCompany } = useCompaniesData(language);

  const handleEditClick = (company: Company) => {
    setIsEditing(true);
    setEditingCompany({ ...company });
  };

  const handleEditModalCancel = () => {
    setIsEditing(false);
    setEditingCompany(undefined);
  };

  const handleEditModalConfirm = () => {
    handleUpdateCompany(editingCompany, setCompaniesData);
    setIsEditing(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_2} />

      <CompaniesList
        companies={companiesData}
        onEdit={handleEditClick}
        randomAvatar={randomAvatar}
        isLoading={isLoading}
      />

      <EditCompanyModal
        isOpen={isEditing}
        onCancel={handleEditModalCancel}
        onConfirm={handleEditModalConfirm}
        value={editingCompany}
        title={dict.modal.edit.company}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
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
