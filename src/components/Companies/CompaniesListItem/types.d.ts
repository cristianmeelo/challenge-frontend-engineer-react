type CompanyListItemProps = {
  company: Company;
  onEdit: (company: Company) => void;
  randomAvatar?: string;
  isLoading: boolean;
};
