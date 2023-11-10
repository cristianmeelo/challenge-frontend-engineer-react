import { useState } from 'react';

import { CompaniesList } from '@/components/Companies/CompaniesList/CompanyList';
import { EditCompanyModal } from '@/components/Companies/EditCompanyModal/EditCompanyModal';
import { handleCancelEditingCompany } from './utils/handleCancelEditingCompany/handleCancelEditingCompany';

import { useCompaniesData } from '@/data';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const Companies: React.FC<CompaniesProps> = ({ data, randomAvatar, setCompaniesData, language, isLoading }) => {
  const dict = getLanguageUseClient(language);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingCompany, setEditingCompany] = useState<Company>();

  const { handleUpdateCompany } = useCompaniesData(language);

  const handleEditClick = (company: Company) => {
    setIsEditing(true);
    setEditingCompany({ ...company });
  };

  const handleEditModalCancel = () => {
    handleCancelEditingCompany(setIsEditing, setEditingCompany);
  };

  const handleEditModalConfirm = () => {
    handleUpdateCompany(editingCompany, setCompaniesData);
    setIsEditing(false);
  };

  return (
    <>
      <div style={{ padding: 24, minHeight: 360 }}>
        <CompaniesList companies={data} onEdit={handleEditClick} randomAvatar={randomAvatar} isLoading={isLoading}/>
      </div>
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
    </>
  );
};
