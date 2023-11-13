type ChecklistModalProps = {
  title: string | undefined;
  isOpen: boolean;
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
  workorder: Workorder | undefined;
  handleCheckboxChange: (updatedChecklist: ChecklistItem[], updatedStatus: WorkOrderStatus) => void;
};
