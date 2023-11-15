type WorkordersTableProps = {
  language: Locale;
  handleEditClick: (record: Workorder) => void;
  handleEditAssignedUserClick: (record: Workorder) => void;
  handleSeeClick: (record: Workorder) => void;
};
