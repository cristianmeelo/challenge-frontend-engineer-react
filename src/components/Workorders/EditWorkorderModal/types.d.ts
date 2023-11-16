/**
 * Props for the EditWorkorderModal component.
 */
type EditWorkorderModalProps = {
  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The current value or data of the workorder to be edited.
   */
  value?: Workorder;

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
   * The language/locale setting for the modal.
   */
  language: Locale;

  /**
   * A callback function to be invoked when the modal is canceled or closed.
   */
  onCancel: () => void;

  /**
   * A callback function to be invoked when the changes are confirmed or the "OK" button is clicked.
   */
  onOk: () => void;

  /**
   * A callback function to handle changes in input fields.
   * @param field - The field of the workorder being edited ('title' or 'description').
   * @param values - The new values for the specified field.
   */
  onChange: (field: WorkOrderField, values: string) => void;

  /**
   * A callback function to select an asset associated with the workorder.
   * @param asset - The asset object to be selected.
   */
  selectAsset: (asset: Asset) => void;

  /**
   * A callback function to select a priority for the workorder.
   * @param priority - The priority value to be selected ('low', 'medium', or 'high').
   */
  selectPriority: (priority: Priority) => void;
};

/**
 * Represents the fields that can be edited for a workorder.
 * Can be 'title' or 'description'.
 */
type WorkOrderField = 'title' | 'description';
