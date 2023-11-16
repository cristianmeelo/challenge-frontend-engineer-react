/**
 * Props for the EditUnitModal component.
 */
type EditUnitModalProps = {
  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The current value or data of the unit to be edited.
   */
  value?: Unit;

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
   * @param e - The React change event representing the input change.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * A callback function to select a company associated with the unit.
   * @param company - The company object to be selected.
   */
  selectCompany: (company: Company) => void;
};
