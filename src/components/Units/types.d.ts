type UnitsProps = {
  unitsData: Unit[];
  setUnitsData: React.Dispatch<React.SetStateAction<Unit[]>>;
  randomAvatar: string | undefined;
  language: Locale;
  isLoading: boolean
};
