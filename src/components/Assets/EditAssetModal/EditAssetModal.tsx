import React, { useState, useEffect } from 'react';
import { Modal, Input, Menu, Dropdown, Button, Space, RadioChangeEvent, Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { AppstoreOutlined, ShopOutlined, SisternodeOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useAssetsContext, useCompaniesContext, useUnitsContext } from '@/hooks';
import { EditableSpecificationsList } from './EditableSpecificationsList/EditableSpecificationsList';

export const EditAssetModal: React.FC<EditAssetModalProps> = ({
  isOpen,
  title,
  value,
  okText,
  cancelText,
  language,
  onCancel,
  onOk,
  onChange,
  handleSpecificationsChange,
  handleCheckboxChange,
  selectModel,
  selectCompany,
  selectUnit,
}) => {
  const dict = getLanguageUseClient(language);
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();
  const { assetsData } = useAssetsContext();
  const [selectedModel, setSelectedModel] = useState<Asset | null>(null);
  const [uniqueModels, setUniqueModels] = useState(new Set<string>());
  const [selectedSensors, setSelectedSensors] = useState<CheckboxValueType[]>(value?.sensors || []);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [editingSpecifications, setEditingSpecifications] = useState<Record<string, any>>(
    value?.specifications || {}
  );

  const modelsOptions = (
    <Menu>
      {assetsData.map((asset) => {
        if (!uniqueModels.has(asset.model)) {
          setUniqueModels((prevModels) => new Set([...prevModels, asset.model]));

          return (
            <Menu.Item key={asset.id} onClick={() => handleModelMenuClick(asset)}>
              {asset.model}
            </Menu.Item>
          );
        }

        return null;
      })}
    </Menu>
  );

  const companiesOptions = (
    <Menu>
      {companiesData.map((company) => (
        <Menu.Item key={company.id} onClick={() => handleCompanyMenuClick(company)}>
          {company.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const unitsOptions = (
    <Menu>
      {selectedCompany &&
        unitsData
          .filter((unit) => unit.companyId === selectedCompany.id)
          .map((unit) => (
            <Menu.Item key={unit.id} onClick={() => handleUnitMenuClick(unit)}>
              {unit.name}
            </Menu.Item>
          ))}
    </Menu>
  );

  const handleModelMenuClick = (asset: Asset) => {
    selectModel(asset);
    setSelectedModel(asset);
  };

  const handleCompanyMenuClick = (company: Company) => {
    selectCompany(company);
    setSelectedCompany(company);
    setSelectedUnit(null);
  };

  const handleUnitMenuClick = (unit: Unit) => {
    selectUnit(unit);
    setSelectedUnit(unit);
  };

  const handleChange = (
    field: AssetField,
    e: React.ChangeEvent<HTMLInputElement> | RadioChangeEvent
  ) => {
    onChange(field, e.target.value);
  };

  const handleCheckboxChangeFn = (checkedValues: CheckboxValueType[]) => {
    setSelectedSensors(checkedValues);
    handleCheckboxChange(checkedValues);
  };

  const handleSpecificationsEdit = (updatedSpecs: Record<string, any>) => {
    setEditingSpecifications(updatedSpecs);
    handleSpecificationsChange(updatedSpecs);
  };

  useEffect(() => {
    setSelectedSensors(value?.sensors || []);
    setEditingSpecifications(value?.specifications || {});
  }, [value?.sensors, value?.specifications]);

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
        <Input value={value?.name} onChange={(e) => handleChange('name', e)} />
        <Dropdown overlay={modelsOptions} placement="bottomRight" trigger={['click']}>
          <Button>
            {selectedModel ? selectedModel.name : dict.dropdown.change_asset} <AppstoreOutlined />
          </Button>
        </Dropdown>

        <Checkbox.Group
          options={assetsData.flatMap((asset) => asset.sensors)}
          value={selectedSensors}
          onChange={handleCheckboxChangeFn}
        />

        <EditableSpecificationsList
          language={language}
          specifications={editingSpecifications}
          onSpecificationsChange={handleSpecificationsEdit}
        />

        <Dropdown overlay={companiesOptions} placement="bottomRight" trigger={['click']}>
          <Button>
            {selectedCompany ? selectedCompany.name : dict.dropdown.change_company} <ShopOutlined />
          </Button>
        </Dropdown>

        {selectedCompany && (
          <Dropdown overlay={unitsOptions} placement="bottomRight" trigger={['click']}>
            <Button>
              {selectedUnit ? selectedUnit.name : dict.dropdown.change_unit} <SisternodeOutlined />
            </Button>
          </Dropdown>
        )}
      </Space>
    </Modal>
  );
};
