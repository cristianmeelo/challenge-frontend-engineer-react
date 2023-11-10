import { handleCancelEditingCompany } from '../handleCancelEditingCompany/handleCancelEditingCompany';

export const handleDoneEditCompany = (
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  setEditingCompany: React.Dispatch<React.SetStateAction<Company | undefined>>,
  setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>,
  editingCompany: Company | undefined,
  prevCompaniesData: Company[]
) => {
  setCompaniesData((prev) => {
    return prev.map((company) => {
      if (company.id === editingCompany?.id) {
        return editingCompany as Company;
      } else {
        return company;
      }
    });
  });

  handleCancelEditingCompany(setIsEditing, setEditingCompany);
};
