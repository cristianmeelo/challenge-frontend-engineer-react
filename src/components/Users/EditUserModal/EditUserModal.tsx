import { Modal, Input, Menu, Dropdown, Button, Space } from 'antd';
import { ShopOutlined, SubnodeOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const EditUserModal: React.FC<EditUsertModalProps> = ({
  isOpen,
  title,
  okText,
  cancelText,
  onCancel,
  onConfirm,
  value,
  onChange,
  handleMenuClick,
  companies,
  units,
  language,
}) => {
  const dict = getLanguageUseClient(language);

  const menu = (
    <Menu>
      {companies.map((company) => (
        <Menu.Item key={company.id} onClick={() => handleMenuClick(company)}>
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
      onOk={onConfirm}
    >
      <Space direction="vertical" size={16}>
        <Input value={value?.name} onChange={(e) => onChange('name', e.target.value)} />
        <Input value={value?.email} onChange={(e) => onChange('email', e.target.value)} />

        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <Button>
            {dict.dropdown.changeCompany} <ShopOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Modal>
  );
};
