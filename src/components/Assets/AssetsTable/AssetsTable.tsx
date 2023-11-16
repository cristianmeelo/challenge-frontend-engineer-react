import { useState } from 'react';
import { Table } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { ToastContainer } from 'react-toastify';

import { EDIT_ASSIGNED_USER_MODAL_TYPES } from '@/enums';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext } from '@/hooks';
import { EditAssignedUsersModal } from '@/components';
import { AssetsColumn, EditAssetModal } from '@/components/Assets';

export const AssetsTable: React.FC<ViewProps> = ({ language }) => {
  const dict = getLanguageUseClient(language);
  const { assetsData, handleUpdateAsset, setAssetsData } = useAssetsContext();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingAsset, setEditingAsset] = useState<Asset>();
  const [isEditingAssigned, setIsEditingAssigned] = useState<boolean>(false);

  const handleEditClick = (asset: Asset) => {
    setIsEditing(true);
    setEditingAsset({ ...asset });
  };

  const handleEditModalCancel: VoidFunction = () => {
    setIsEditing(false);
  };

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

  const handleEditModalConfirm: VoidFunction = () => {
    handleUpdateAsset(editingAsset, setAssetsData);
    setIsEditing(false);
  };

  const columns = AssetsColumn(language, handleEditClick, handleEditAssignedUserClick);

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
          type: EDIT_ASSIGNED_USER_MODAL_TYPES.ASSET,
        }}
        handleCheckboxChange={(checkedValues: CheckboxValueType[]) => {
          setEditingAsset((prev: any) => {
            return { ...prev!, assignedUserIds: checkedValues };
          });
        }}
      />
      <EditAssetModal
        isOpen={isEditing}
        value={editingAsset}
        title={`${dict.modal.edit.workorder}`}
        okText={`${dict.button.confirm}`}
        cancelText={`${dict.button.cancel}`}
        language={language}
        onCancel={handleEditModalCancel}
        onOk={handleEditModalConfirm}
        onChange={(field: AssetField, value: string) =>
          setEditingAsset((prev) => {
            return { ...prev!, [field]: value };
          })
        }
        handleCheckboxChange={(checkedValues: CheckboxValueType[]) => {
          setEditingAsset((prev: any) => {
            return { ...prev!, sensors: checkedValues };
          });
        }}
        selectModel={(asset: Asset) => {
          setEditingAsset((prev) => ({
            ...prev!,
            assetId: asset.model,
          }));
        }}
        selectCompany={(company: Company) => {
          setEditingAsset((prev) => ({
            ...prev!,
            companyId: company.id,
          }));
        }}
        selectUnit={(unit: Unit) => {
          setEditingAsset((prev) => ({
            ...prev!,
            unitId: unit.id,
          }));
        }}
      />
      <ToastContainer />
    </>
  );
};
