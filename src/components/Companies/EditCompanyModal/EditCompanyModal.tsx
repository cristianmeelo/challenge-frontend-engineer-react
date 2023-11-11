import { Modal, Input } from 'antd';

interface EditCompanyModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  value?: Company;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  okText: string;
  cancelText: string;
}

export const EditCompanyModal: React.FC<EditCompanyModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
  value,
  onChange,
  title,
  okText,
  cancelText,
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel}
      onOk={onConfirm}
    >
      <Input value={value?.name} onChange={onChange} />
    </Modal>
  );
};
