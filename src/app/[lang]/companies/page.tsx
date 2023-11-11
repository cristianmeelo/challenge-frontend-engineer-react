'use client';

import { ToastContainer } from 'react-toastify';

import { useCompaniesData } from '@/data';
import { useRandomAvatar } from '@/hooks';
import { Companies as CompaniesView } from '@/components';

export default function Companies({ language }: PageProps) {
  const { companiesData, isLoading, setCompaniesData } = useCompaniesData(language);
  const { randomAvatar } = useRandomAvatar();

  return (
    <>
      {!isLoading && (
        <CompaniesView
          data={companiesData}
          randomAvatar={randomAvatar}
          setCompaniesData={setCompaniesData}
          language={language}
          isLoading={isLoading}
        />
      )}
      <ToastContainer />
    </>
  );
}
