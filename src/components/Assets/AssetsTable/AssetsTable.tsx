import { useState } from 'react';
import { Button, Space, Table, Tag } from 'antd';
import { ToastContainer } from 'react-toastify';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';
import { EditAssignedUsersModal } from '@/components';
import { AssetsColumn } from '@/components/Assets';

export const AssetsTable = ({ language }: { language: Locale }) => {
  const dict = getLanguageUseClient(language);
  const { assetsData, handleUpdateAsset, setAssetsData } = useAssetsContext();
  const [isEditingAssigned, setIsEditingAssigned] = useState<boolean>(false);
  const [editingAsset, setEditingAsset] = useState<Asset>();

  const handleEditAssignedUserModalCancel: VoidFunction = () => {
    setIsEditingAssigned(false);
  };

  const handleEditAssignedUsersConfirm: VoidFunction = () => {
    handleUpdateAsset(editingAsset, setAssetsData);
    setIsEditingAssigned(false);
  };

  const handleEditAssignedUserClick = (asset: Asset) => {
    setIsEditingAssigned(true);
    setEditingAsset({ ...asset });
  };

  const columns = AssetsColumn(language, handleEditAssignedUserClick);

  return (
    <>
      <Table
        dataSource={assetsData}
        columns={columns}
        bordered
        title={() => `${dict.table.workorders.title}`}
        pagination={{ pageSize: 10 }}
      />
      <EditAssignedUsersModal
        isOpen={isEditingAssigned}
        title={`${editingAsset?.name} - ${dict.modal.assigned_users} `}
        okText={`${dict.button.confirm}`}
        cancelText={`${dict.button.cancel}`}
        onCancel={handleEditAssignedUserModalCancel}
        onConfirm={handleEditAssignedUsersConfirm}
        data={{
          assignedUserIds: editingAsset?.assignedUserIds || [],
          type: 'asset',
        }}
        handleCheckboxChange={(checkedValues: CheckboxValueType[]) => {
          setEditingAsset((prev: any) => {
            return { ...prev!, assignedUserIds: checkedValues };
          });
        }}
      />
      <ToastContainer />
    </>
  );
};
