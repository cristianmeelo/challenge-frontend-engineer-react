/**
 * Props for the EditUserModal component.
 */
type EditUserModalProps = {
  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The current value or data of the user to be edited.
   */
  value?: User;

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
   * @param field - The field of the user being edited ('email' or 'name').
   * @param values - The new values for the specified field.
   */
  onChange: (field: UserField, values: string) => void;

  /**
   * A callback function to select a company associated with the user.
   * @param company - The company object to be selected.
   */
  selectCompany: (company: Company) => void;

  /**
   * A callback function to select a unit associated with the user.
   * @param unit - The unit object to be selected.
   */
  selectUnit: (unit: Unit) => void;
};

/**
 * Represents the fields that can be edited for a user.
 * Can be 'email' or 'name'.
 */
type UserField = 'email' | 'name';
