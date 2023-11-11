'use client';

import { useCompaniesData, useUnitsData, useUsersData } from '@/data';
import { Users as UsersView } from '@/components';

export default function Users({ language }: PageProps) {
  const { usersData } = useUsersData(language);
  const { companiesData } = useCompaniesData(language);
  const { unitsData } = useUnitsData(language);

  return (
    <UsersView
      language={language}
      usersData={usersData}
      companiesData={companiesData}
      unitsData={unitsData}
    />
  );
}
