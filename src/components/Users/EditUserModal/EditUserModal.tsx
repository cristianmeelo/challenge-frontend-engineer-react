import { useState } from 'react';
import { Modal, Input, Menu, Dropdown, Button, Space } from 'antd';
import { ShopOutlined, SisternodeOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesContext, useUnitsContext } from '@/hooks';

export const EditUserModal: React.FC<EditUsertModalProps> = ({
  isOpen,
  value,
  title,
  okText,
  cancelText,
  language,
  onCancel,
  onOk,
  onChange,
  selectCompany,
  selectUnit,
}) => {
  const dict = getLanguageUseClient(language);
  const { companiesData } = useCompaniesContext();
  const { unitsData } = useUnitsContext();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

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

  const handleChange = (field: UserField, e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field, e.target.value);
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

  const handleModalCancel = () => {
    onCancel();
    setSelectedUnit(null);
    setSelectedCompany(null);
  };
  const handleModalConfirm = () => {
    onOk();
    setSelectedUnit(null);
    setSelectedCompany(null);
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      okText={okText}
      cancelText={cancelText}
      onCancel={handleModalCancel}
      onOk={handleModalConfirm}
    >
      <Space direction="vertical" size={16}>
        <Input value={value?.name} onChange={(e) => handleChange('name', e)} />
        <Input value={value?.email} onChange={(e) => handleChange('email', e)} />

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
