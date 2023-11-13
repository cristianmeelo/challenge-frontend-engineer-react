'use client';

import { Companies as CompaniesView } from '@/components';
import { useCompaniesContext } from '@/hooks';
import { useEffect } from 'react';

export default function Companies({ params }: PageProps) {
  const language = params.lang;
  const {fetchCompaniesData} = useCompaniesContext();

  useEffect(()=> {
    fetchCompaniesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <CompaniesView language={language} />
    </>
  );
}
