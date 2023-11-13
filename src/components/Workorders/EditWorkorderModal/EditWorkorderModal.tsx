import React, { useState } from 'react';
import { Modal, Input, Menu, Dropdown, Button, Space, Segmented } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import { useAssetsContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { SegmentedValue } from 'antd/es/segmented';

type EditWorkorderModalProps = {
  title: string | undefined;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  value?: Workorder;
  onChange: any; // #TODO
  onConfirm: (editedTitle: string, editedDescription: string) => void;
  workorder: Workorder | undefined;
  handleAssetMenuClick: (asset: Asset) => void;
  onStatusChange: (status: WorkOrderStatus) => void;
  onPriorityChange: (priority: Priority) => void;

  language: Locale;
};

export const EditWorkorderModal: React.FC<EditWorkorderModalProps> = ({
  isOpen,
  title,
  okText,
  value,
  onChange,
  cancelText,
  onCancel,
  onConfirm,
  workorder,
  handleAssetMenuClick,
  language,
  onStatusChange,
  onPriorityChange,
}) => {



  const dict = getLanguageUseClient(language);

  const [editedTitle, setEditedTitle] = useState<string>(workorder?.title || '');
  const [editedDescription, setEditedDescription] = useState<string>(workorder?.description || '');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [status, setStatus] = useState<WorkOrderStatus>(workorder?.status || 'in Progress');
  const [priority, setPriority] = useState<Priority>(workorder?.priority || 'High');

  const { assetsData } = useAssetsContext();



  const handleChange = (field: WorkOrderField, e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(field, e.target.value);
  };

  const assetsMenu = (
    <Menu>
      {assetsData.map((asset) => (
        <Menu.Item key={asset.id} onClick={() => handleAssetMenuClick(asset)}>
          {asset.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Modal
      title={title}
      open={isOpen}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel}
      onOk={() => onConfirm(editedTitle, editedDescription)}
    >
      <Space direction="vertical" size={16}>
        <Input value={value?.title} onChange={(e) => handleChange('title', e)} />
        <Input.TextArea
          value={value?.description}
          onChange={(e) => handleChange('description', e)}
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
        <Dropdown overlay={assetsMenu} placement="bottomRight" trigger={['click']}>
          <Button>
            {selectedAsset ? selectedAsset.name : dict.dropdown.change_asset} <AppstoreOutlined />
          </Button>
        </Dropdown>
        <Segmented
          options={['in Progress', 'Completed']}
          value={status}
          onChange={(value: SegmentedValue) => {
            setStatus(value as WorkOrderStatus);
            onStatusChange(value as WorkOrderStatus);
          }}
        />
        <Segmented
          options={['Low', 'Medium', 'High']}
          value={priority}
          onChange={(value: SegmentedValue) => {
            setPriority(value as Priority);
            onPriorityChange(value as Priority);
          }}
        />
      </Space>
    </Modal>
  );
};
