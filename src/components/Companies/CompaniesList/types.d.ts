type CompaniesListProps = {
  companies: Company[];
  onEdit: (company: Company) => void;
  randomAvatar?: string;
  isLoading: boolean;
};
