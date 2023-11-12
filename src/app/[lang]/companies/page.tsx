'use client';

import { useCompaniesData } from '@/data';
import { useRandomAvatar } from '@/hooks';
import { Companies as CompaniesView } from '@/components';

export default function Companies({ params }: PageProps) {
  const language = params.lang;
  const { companiesData, isLoading, setCompaniesData } = useCompaniesData(language);
  const { randomAvatar } = useRandomAvatar();

  return (
    <>
      {!isLoading && (
        <CompaniesView
          companiesData={companiesData}
          randomAvatar={randomAvatar}
          setCompaniesData={setCompaniesData}
          language={language}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
