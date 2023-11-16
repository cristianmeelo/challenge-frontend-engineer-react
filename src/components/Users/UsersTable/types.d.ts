/**
 * Props for the UsersTable component.
 */
type UsersTableProps = {
  /**
   * The language/locale setting for the table.
   */
  language: Locale;

  /**
   * A callback function triggered when the "Edit" action is performed on a user record.
   * @param record - The user record being edited.
   */
  handleEditClick: (record: User) => void;
};
