import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Table } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext, useUsersContext, useWorkordersContext } from '@/hooks';
import { BreadcrumbBasic as Breadcrumb } from '@/components';
import { ChecklistModal, EditWorkorderModal, WorkordersColumn } from '@/components/Workorders';
import { EditAssignedUsersModal } from '@/components/_Shared';

export const Workorders: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { workordersData, handleUpdateWorkorder, setWorkordersData } = useWorkordersContext();
  const { assetsData } = useAssetsContext();
  const { usersData } = useUsersContext();

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
  const handleEditAssignedUserModalCancel = () => {
    setIsEditingAssigned(false);
  };

  const handleEditModalCancel = () => {
    setIsEditing(false);
  };

  const handleSeeClick = (workorder: Workorder) => {
    setIsSeeing(true);
    setEditingWorkorder({ ...workorder });
  };

  const handleSeeModalCancel = () => {
    setIsSeeing(false);
  };

  const handleSeeModalConfirm = () => {
    handleUpdateWorkorder(editingWorkorder, setWorkordersData);
    setIsSeeing(false);
  };

  const handleEditModalConfirm = () => {
    handleUpdateWorkorder(editingWorkorder, setWorkordersData);
    setIsEditing(false);
  };

  const columns = WorkordersColumn(
    assetsData,
    usersData,
    handleSeeClick,
    handleEditClick,
    handleEditAssignedUserClick,
    language
  );

  const handleEditAssignedUsersConfirm = () => {
    handleUpdateWorkorder(editingWorkorder, setWorkordersData);
    setIsEditingAssigned(false);
  };

  return (
    <>
      <Breadcrumb content={dict.sidebar.icon_5} />
      <Table
        dataSource={workordersData}
        columns={columns}
        bordered
        title={() => `${dict.table.workorders.title}`}
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
