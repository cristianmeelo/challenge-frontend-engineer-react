import { Modal, Input } from 'antd';

export const EditCompanyModal: React.FC<EditCompanyModalProps> = ({
  isOpen,
  value,
  title,
  okText,
  cancelText,
  onCancel,
  onOk,
  onChange,
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Input value={value?.name} onChange={onChange} />
    </Modal>
  );
};
