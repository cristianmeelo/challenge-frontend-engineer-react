'use client';

import { useCompaniesData, useUnitsData } from '@/data';
import { useRandomAvatar } from '@/hooks';
import { Units as UnitsView } from '@/components';

export default function Units({ params }: PageProps) {
  const language = params.lang;
  const { unitsData, setUnitsData, isLoading } = useUnitsData(language);
  const { companiesData } = useCompaniesData(language);
  const { randomAvatar } = useRandomAvatar();

  return (
    <>
      <UnitsView
        unitsData={unitsData}
        companiesData={companiesData}
        randomAvatar={randomAvatar}
        setUnitsData={setUnitsData}
        language={language}
        isLoading={isLoading}
      />
    </>
  );
}
