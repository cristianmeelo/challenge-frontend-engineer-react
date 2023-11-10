interface CompaniesProps {
  data: Company[];
  randomAvatar: string | undefined;
  setCompaniesData: React.Dispatch<React.SetStateAction<Company[]>>;
  language: Locale;
}
