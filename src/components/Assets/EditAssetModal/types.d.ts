/**
 * Props for the EditWorkorderModal component.
 */
type EditAssetModalProps = {
  /**
   * Determines whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * The current value or data of the workorder to be edited.
   */
  value?: Asset;

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
   * @param field - The field of the asset being edited ('name').
   * @param values - The new values for the specified field.
   */
  onChange: (field: AssetField, values: string) => void;

  /**
   * A callback function to handle changes in checkbox values.
   * @param checkedValues - An array of values representing the checked checkboxes.
   */
  handleCheckboxChange: (checkedValues: CheckboxValueType[]) => void;

  /**
   * A callback function to select an model associated with the asset.
   * @param asset - The asset object to be selected.
   */
  selectModel: (asset: Asset) => void;

  /**
   * A callback function to handle changes in the asset specifications.
   * @param specificationsList - The updated specifications list after editing.
   */
  handleSpecificationsChange: (specificationsList: Record<string, any>) => void;

  /**
   * A callback function to select a company associated with the asset.
   * @param company - The company object to be selected.
   */
  selectCompany: (company: Company) => void;

  /**
   * A callback function to select a unit associated with the asset.
   * @param unit - The unit object to be selected.
   */
  selectUnit: (unit: Unit) => void;
};

/**
 * Represents the fields that can be edited for an asset.
 * Can be "name" or "sensors".
 */
type AssetField = 'name' | 'sensors';
