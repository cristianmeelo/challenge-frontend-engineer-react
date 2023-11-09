export const handleCancelEditingCompany = (
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setEditingCompany: React.Dispatch<React.SetStateAction<Company | undefined>>
) => {
  setIsEditing(false);
  setEditingCompany(undefined);
};
