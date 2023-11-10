type UnitsProps = {
  unitsData: Unit[];
  setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>;
  companiesData: Company[];
  randomAvatar: string | undefined;
  language: Locale;
  isLoading: boolean;
};
