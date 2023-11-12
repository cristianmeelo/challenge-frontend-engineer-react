'use client';

import { useCompaniesData, useUnitsData, useUsersData } from '@/data';
import { Users as UsersView } from '@/components';

export default function Users({ params }: PageProps) {
  const language = params.lang;
  const { usersData, setUsersData } = useUsersData(language);
  const { companiesData } = useCompaniesData(language);
  const { unitsData } = useUnitsData(language);

  return (
    <UsersView
      language={language}
      usersData={usersData}
      setUsersData={setUsersData}
      companiesData={companiesData}
      unitsData={unitsData}
    />
  );
}
