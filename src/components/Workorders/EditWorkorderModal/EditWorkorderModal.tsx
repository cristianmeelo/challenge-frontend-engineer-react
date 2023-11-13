import React, { useState } from 'react';
import { Modal, Input, Menu, Dropdown, Button, Space } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

import { useAssetsContext } from '@/hooks';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

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
}) => {
  const dict = getLanguageUseClient(language);

  const [editedTitle, setEditedTitle] = useState<string>(workorder?.title || '');
  const [editedDescription, setEditedDescription] = useState<string>(workorder?.description || '');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const { assetsData } = useAssetsContext();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDescription(e.target.value);
  };

  const handleCompanyMenuClick = (asset: Asset) => {
    setSelectedAsset(asset);
    // setSelectedUnit(null);
    handleAssetMenuClick(asset);
  };

  const handleChange = (field: WorkOrderField, e: React.ChangeEvent<HTMLInputElement>) => {
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
      </Space>
    </Modal>
  );
};
