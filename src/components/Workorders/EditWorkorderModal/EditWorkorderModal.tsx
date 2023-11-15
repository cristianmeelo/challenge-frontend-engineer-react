import React, { useState } from 'react';
import { Modal, Input, Menu, Dropdown, Button, Space, Segmented } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import { AppstoreOutlined } from '@ant-design/icons';
import { useAssetsContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const EditWorkorderModal: React.FC<EditWorkorderModalProps> = ({
  isOpen,
  title,
  value,
  okText,
  onChange,
  cancelText,
  language,
  onCancel,
  onOk,
  selectAsset,
  selectPriority,
}) => {
  const dict = getLanguageUseClient(language);
  const { assetsData } = useAssetsContext();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [priority, setPriority] = useState<Priority>(value?.priority || 'high');

  const assetsOption = (
    <Menu>
      {assetsData.map((asset) => (
        <Menu.Item key={asset.id} onClick={() => handleAssetMenuClick(asset)}>
          {asset.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const handleAssetMenuClick = (asset: Asset) => {
    selectAsset(asset);
    setSelectedAsset(asset);
  };

  const handleChange = (
    field: WorkOrderField,
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChange(field, e.target.value);
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Space direction="vertical" size={16}>
        <Input value={value?.title} onChange={(e) => handleChange('title', e)} />
        <Input.TextArea
          value={value?.description}
          onChange={(e) => handleChange('description', e)}
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
        <Dropdown overlay={assetsOption} placement="bottomRight" trigger={['click']}>
          <Button>
            {selectedAsset ? selectedAsset.name : dict.dropdown.change_asset} <AppstoreOutlined />
          </Button>
        </Dropdown>

        <Segmented
          options={['low', 'medium', 'high']}
          value={priority}
          onChange={(value: SegmentedValue) => {
            setPriority(value as Priority);
            selectPriority(value as Priority);
          }}
        />
      </Space>
    </Modal>
  );
};
