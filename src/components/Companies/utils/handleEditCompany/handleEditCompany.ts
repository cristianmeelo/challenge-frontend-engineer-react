export const handleEditCompany = (
  record: Company,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setEditingCompany: React.Dispatch<React.SetStateAction<Company | undefined>>
) => {
  setIsEditing(true);
  setEditingCompany({ ...record });
};
