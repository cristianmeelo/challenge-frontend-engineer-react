import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useUnitsContext } from '@/hooks';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { UnitsList, EditUnitModal } from '@/components/Units';

export const Units: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingUnit, setEditingUnit] = useState<Unit>();
  const { handleUpdateUnit, setUnitsData } = useUnitsContext();

  const handleEditClick = (unit: Unit) => {
    setIsEditing(true);
    setEditingUnit({ ...unit });
  };

  const onCancel: VoidFunction = () => {
    setIsEditing(false);
    setEditingUnit(undefined);
  };

  const onOk: VoidFunction = () => {
    handleUpdateUnit(editingUnit, setUnitsData);
    setIsEditing(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_3} />
      <UnitsList onEdit={handleEditClick} />
      <EditUnitModal
        isOpen={isEditing}
        value={editingUnit}
        title={dict.modal.edit.unit}
        okText={dict.button.confirm}
        cancelText={dict.button.cancel}
        onCancel={onCancel}
        onOk={onOk}
        language={language}
        onChange={(e) => {
          setEditingUnit((prev) => ({
            ...prev!,
            name: e.target.value,
          }));
        }}
        selectCompany={(company: Company) => {
          setEditingUnit((prev) => ({
            ...prev!,
            companyId: company.id,
          }));
        }}
      />
      <ToastContainer />
    </>
  );
};
