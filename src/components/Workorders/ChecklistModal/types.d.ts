/**
 * Props for the ChecklistModal component.
 */
type ChecklistModalProps = {
  /**
   * The title to be displayed in the modal header.
   */
  title: string | undefined;

  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The text to be displayed on the "OK" button.
   */
  okText: string;

  /**
   * The text to be displayed on the "Cancel" button.
   */
  cancelText: string;

  /**
   * A callback function to be invoked when the modal is canceled or closed.
   */
  onCancel: () => void;

  /**
   * A callback function to be invoked when the changes are confirmed or the "OK" button is clicked.
   */
  onConfirm: () => void;

  /**
   * The workorder object associated with the checklist.
   */
  workorder: Workorder | undefined;

  /**
   * A callback function to handle changes in checkbox items and the work order status.
   * @param updatedChecklist - The updated checklist items.
   * @param updatedStatus - The updated work order status.
   */
  handleCheckboxChange: (updatedChecklist: ChecklistItem[], updatedStatus: WorkOrderStatus) => void;
};
