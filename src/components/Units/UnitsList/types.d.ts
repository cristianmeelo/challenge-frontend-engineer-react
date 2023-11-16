/**
 * Props for the UnitsList component.
 */
interface UnitsListProps {
  /**
   * A callback function triggered when the "Edit" action is performed on a unit.
   * @param unit - The unit object being edited.
   */
  onEdit: (unit: Unit) => void;
}
