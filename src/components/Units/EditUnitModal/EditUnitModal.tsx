import { Modal, Input, Menu, Dropdown, Button, Space } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const EditUnitModal: React.FC<EditUnitModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  value,
  onChange,
  handleMenuClick,
  title,
  okText,
  cancelText,
  companies,
  language,
}) => {
  const menu = (
    <Menu>
      {companies.map((company) => (
        <Menu.Item key={company.id} onClick={() => handleMenuClick(company)}>
          {company.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  const dict = getLanguageUseClient(language);

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
        <Input value={value?.name} onChange={onChange} />

        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <Button>
            {dict.dropdown.changeCompany} <ShopOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Modal>
  );
};
