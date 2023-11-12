interface CompaniesProps {
  companiesData: Company[];
  randomAvatar: string | undefined;
  setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>;
  language: Locale;
  isLoading: boolean;
}
