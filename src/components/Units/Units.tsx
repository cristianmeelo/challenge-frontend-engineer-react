import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useUnitsData } from '@/data';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { EditUnitModal } from './EditUnitModal/EditUnitModal';
import { UnitsList } from './UnitsList/UnitsList';

export const Units: React.FC<UnitsProps> = ({
  unitsData,
  companiesData,
  randomAvatar,
  setUnitsData,
  language,
  isLoading,
}) => {
  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUnit, setEditingUnit] = useState<Unit>();
  const { handleUpdateUnit } = useUnitsData(language);

  const handleEditClick = (unit: Unit) => {
    setIsEditing(true);
    setEditingUnit({ ...unit });
  };

  const handleEditModalCancel = () => {
    setIsEditing(false);
    setEditingUnit(undefined);
  };

  const handleEditModalConfirm = () => {
    handleUpdateUnit(editingUnit, setUnitsData);
    setIsEditing(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_3} />

      <UnitsList
        units={unitsData}
        companies={companiesData}
        onEdit={handleEditClick}
        randomAvatar={randomAvatar}
        isLoading={isLoading}
      />

      <EditUnitModal
        isOpen={isEditing}
        onCancel={handleEditModalCancel}
        onConfirm={handleEditModalConfirm}
        value={editingUnit}
        companies={companiesData}
        title={dict.modal.edit.unit}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
        language={language}
        handleMenuClick={(company: Company) => {
          setEditingUnit((prev) => ({
            ...prev!,
            companyId: company.id,
          }));
        }}
        onChange={(e) => {
          setEditingUnit((prev) => ({
            ...prev!,
            name: e.target.value,
          }));
        }}
      />
      <ToastContainer />
    </>
  );
};
