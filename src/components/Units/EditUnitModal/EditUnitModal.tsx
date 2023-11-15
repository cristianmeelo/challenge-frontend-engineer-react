import { Modal, Input, Menu, Dropdown, Button, Space } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useCompaniesContext } from '@/hooks';

export const EditUnitModal: React.FC<EditUnitModalProps> = ({
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
}) => {
  const dict = getLanguageUseClient(language);
  const { companiesData } = useCompaniesContext();
  const companiesOptions = (
    <Menu>
      {companiesData.map((company) => (
        <Menu.Item key={company.id} onClick={() => selectCompany(company)}>
          {company.name}
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
      onOk={onOk}
    >
      <Space direction="vertical" size={16}>
        <Input value={value?.name} onChange={onChange} />
        <Dropdown overlay={companiesOptions} placement="bottomRight" trigger={['click']}>
          <Button>
            {dict.dropdown.change_company} <ShopOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Modal>
  );
};
