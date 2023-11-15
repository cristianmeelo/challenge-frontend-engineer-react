import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useWorkordersContext } from '@/hooks';
import { BreadcrumbBasic as Breadcrumb, EditAssignedUsersModal } from '@/components';
import { ChecklistModal, EditWorkorderModal, WorkordersTable } from '@/components/Workorders';

export const Workorders: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { handleUpdateWorkorder, setWorkordersData } = useWorkordersContext();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSeeing, setIsSeeing] = useState<boolean>(false);
  const [editingWorkorder, setEditingWorkorder] = useState<Workorder>();
  const [isEditingAssigned, setIsEditingAssigned] = useState<boolean>(false);

  const handleEditClick = (workorder: Workorder) => {
    setIsEditing(true);
    setEditingWorkorder({ ...workorder });
  };
  const handleEditAssignedUserClick = (workorder: Workorder) => {
    setIsEditingAssigned(true);
    setEditingWorkorder({ ...workorder });
  };
  const handleEditAssignedUserModalCancel: VoidFunction = () => {
    setIsEditingAssigned(false);
  };
  const handleEditModalCancel: VoidFunction = () => {
    setIsEditing(false);
  };
  const handleSeeClick = (workorder: Workorder) => {
    setIsSeeing(true);
    setEditingWorkorder({ ...workorder });
  };
  const handleSeeModalCancel: VoidFunction = () => {
    setIsSeeing(false);
  };

  const handleSeeModalConfirm: VoidFunction = () => {
    handleUpdateWorkorder(editingWorkorder, setWorkordersData);
    setIsSeeing(false);
  };

  const handleEditModalConfirm: VoidFunction = () => {
    handleUpdateWorkorder(editingWorkorder, setWorkordersData);
    setIsEditing(false);
  };

  const handleEditAssignedUsersConfirm: VoidFunction = () => {
    handleUpdateWorkorder(editingWorkorder, setWorkordersData);
    setIsEditingAssigned(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_5} />
      <WorkordersTable
        language={language}
        handleEditClick={handleEditClick}
        handleSeeClick={handleSeeClick}
        handleEditAssignedUserClick={handleEditAssignedUserClick}
      />
      <ChecklistModal
        isOpen={isSeeing}
        title={editingWorkorder?.title}
        okText={`${dict.button.confirm}`}
        cancelText={`${dict.button.cancel}`}
        onCancel={handleSeeModalCancel}
        onConfirm={handleSeeModalConfirm}
        workorder={editingWorkorder}
        handleCheckboxChange={(checkedValues: ChecklistItem[], updateStatus: WorkOrderStatus) => {
          setEditingWorkorder((prev) => {
            return { ...prev!, checklist: checkedValues, status: updateStatus };
          });
        }}
      />

      <EditWorkorderModal
        isOpen={isEditing}
        value={editingWorkorder}
        title={`${dict.modal.edit.workorder}`}
        okText={`${dict.button.confirm}`}
        cancelText={`${dict.button.cancel}`}
        language={language}
        onCancel={handleEditModalCancel}
        onOk={handleEditModalConfirm}
        onChange={(field: WorkOrderField, value: string) =>
          setEditingWorkorder((prev) => {
            return { ...prev!, [field]: value };
          })
        }
        selectAsset={(asset: Asset) => {
          setEditingWorkorder((prev) => ({
            ...prev!,
            assetId: asset.id,
          }));
        }}
        selectPriority={(priority: Priority) => {
          setEditingWorkorder((prev) => {
            return { ...prev!, priority: priority };
          });
        }}
      />

      <EditAssignedUsersModal
        isOpen={isEditingAssigned}
        title={`${editingWorkorder?.title} - ${dict.modal.assigned_users} `}
        okText={`${dict.button.confirm}`}
        cancelText={`${dict.button.cancel}`}
        onCancel={handleEditAssignedUserModalCancel}
        onConfirm={handleEditAssignedUsersConfirm}
        data={{
          assignedUserIds: editingWorkorder?.assignedUserIds || [],
          type: 'workorder',
        }}
        handleCheckboxChange={(checkedValues: CheckboxValueType[]) => {
          setEditingWorkorder((prev: any) => {
            return { ...prev!, assignedUserIds: checkedValues };
          });
        }}
      />

      <ToastContainer />
    </>
  );
};
