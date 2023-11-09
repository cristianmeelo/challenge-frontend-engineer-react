import { Modal, Input } from 'antd';

interface EditCompanyModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  value?: Company;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditCompanyModal: React.FC<EditCompanyModalProps> = ({ isOpen, onCancel, onConfirm, value, onChange }) => {
  return (
    <Modal title="Edit Company" open={isOpen} okText="Confirmar" onCancel={onCancel} onOk={onConfirm}>
      <Input value={value?.name} onChange={onChange} />
    </Modal>
  );
};
