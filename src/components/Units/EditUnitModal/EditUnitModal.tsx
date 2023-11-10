import { Modal, Input } from 'antd';

export const EditUnitModal: React.FC<EditUnitModalProps> = ({ isOpen, onCancel, onConfirm, value, onChange, title, okText, cancelText }) => {
  return (
    <Modal title={title} open={isOpen} okText={okText} cancelText={cancelText} onCancel={onCancel} onOk={onConfirm}>
      <Input value={value?.name} onChange={onChange} />
    </Modal>
  );
};
