type EditAssignedUserModalProps = {
  title: string | undefined;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  workorder: Workorder | undefined;
  handleCheckboxChange: (checkedValues: CheckboxValueType[]) => void;
};
