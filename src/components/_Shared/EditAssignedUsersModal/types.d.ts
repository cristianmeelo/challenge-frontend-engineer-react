/**
 * Represents the props for the EditAssignedUserModal component.
 */
interface EditAssignedUserModalProps {
  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The title to be displayed in the modal header.
   */
  title: string;

  /**
   * The text to be displayed on the "OK" button.
   */
  okText: string;

  /**
   * The text to be displayed on the "Cancel" button.
   */
  cancelText: string;

  /**
   * The data object containing assigned user IDs and the type of entity (workorder or asset).
   */
  data: {
    /**
     * An array of assigned user IDs.
     */
    assignedUserIds: number[];

    /**
     * The type of entity, which can be 'workorder' or 'asset'.
     */
    type: MyEnums.EditAssignedUserModalType.Asset | MyEnums.EditAssignedUserModalType.Workorder;
  };

  /**
   * A callback function to be invoked when the modal is canceled or closed.
   */
  onCancel: () => void;

  /**
   * A callback function to be invoked when the changes are confirmed or the "OK" button is clicked.
   */
  onConfirm: () => void;

  /**
   * A callback function to handle changes in checkbox values.
   * @param checkedValues - An array of values representing the checked checkboxes.
   */
  handleCheckboxChange: (checkedValues: CheckboxValueType[]) => void;
}
