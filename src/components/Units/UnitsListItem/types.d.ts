/**
 * Props for the UnitListItem component.
 */
type UnitListItemProps = {
  /**
   * The unit object containing information such as ID, company ID, and name.
   */
  unit: Unit;

  /**
   * A callback function triggered when the "Edit" action is performed on the unit.
   * @param unit - The unit object being edited.
   */
  onEdit: (unit: Unit) => void;

  /**
   * A URL or source string for a random avatar associated with the unit.
   */
  randomAvatar: string | undefined;
};
