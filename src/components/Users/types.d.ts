type UserProps = {
  language: Locale;
  usersData: User[];
  setUsersData: React.Dispatch<React.SetStateAction<User[]>>;
  companiesData: Company[];
  unitsData: Unit[];
};
