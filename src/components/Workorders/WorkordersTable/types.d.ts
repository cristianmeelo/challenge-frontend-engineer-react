/**
 * Props for the WorkordersTable component.
 */
type WorkordersTableProps = {
  /**
   * The language/locale setting for the table.
   */
  language: Locale;

  /**
   * Callback function invoked when the "Edit" button is clicked for a work order.
   * @param record - The work order record being edited.
   */
  handleEditClick: (record: Workorder) => void;

  /**
   * Callback function invoked when the "Edit Assigned User" button is clicked for a work order.
   * @param record - The work order record being edited.
   */
  handleEditAssignedUserClick: (record: Workorder) => void;

  /**
   * Callback function invoked when the "See" button is clicked for a work order.
   * @param record - The work order record being viewed.
   */
  handleSeeClick: (record: Workorder) => void;
};
