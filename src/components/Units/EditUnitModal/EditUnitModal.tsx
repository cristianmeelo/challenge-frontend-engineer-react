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
  onConfirm,
  onChange,
  handleMenuClick,
}) => {
  const { companiesData } = useCompaniesContext();
  const menu = (
    <Menu>
      {companiesData.map((company) => (
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
            {dict.dropdown.change_company} <ShopOutlined />
          </Button>
        </Dropdown>
      </Space>
    </Modal>
  );
};
