interface EditAssignedUserModalProps {
  isOpen: boolean;
  title: string;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  handleCheckboxChange: (checkedValues: CheckboxValueType[]) => void;
  data: {
    assignedUserIds: number[];
    type: 'workorder' | 'asset';
  };
}
